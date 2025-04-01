import { useState, useEffect } from 'react';
import './DocumentsListing.css';

const fetchDocuments = async () => {
    return [
        { title: "Справка от физкультуры", description: "Справка форма №5 подойдёт для вузов и школ." },
        { title: "Лицензия на телепортацию", description: "Действует в пределах Солнечной системы." },
        { title: "Диплом Гарварда", description: "Настоящий диплом с печатью Министерства магии." },
        { title: "Паспорт гражданина Луны", description: "Официальный документ, подтверждающий гражданство Луны." },
        { title: "Разрешение на безделье", description: "Позволяет не работать. Подписано важными людьми." },
        { title: "Справка о недееспособности по причине питонист", description: "Тоже позволяет не работать, но, [данные удалены]" }
    ];
};

export default function DocumentsListing({ fio, email }) {
    const [documents, setDocuments] = useState([]);
	console.log(email);
    useEffect(() => {
        fetchDocuments().then(setDocuments);
    }, []);

    const changeBalance = () => {
        return new Promise((resolve, reject) => {
            const ws = new WebSocket('ws://localhost:8765/change_balance');
            ws.onopen = () => {
                console.log('Connected to WebSocket server for balance change');
                ws.send(JSON.stringify({ email }));
            };
            ws.onmessage = (messageEvent) => {
                const data = JSON.parse(messageEvent.data);
                if (data.error) {
                    reject(data.error);
                } else {
                    resolve(data);
                }
                ws.close();
            };
            ws.onerror = (err) => {
                reject(err);
                ws.close();
            };
        });
    };

    const handleBuy = async (docTitle) => {
        try {
            // Сначала меняем баланс через WebSocket
            await changeBalance();

            // Затем запрашиваем документ по fetch
            const response = await fetch(`http://localhost:8766/documents`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: docTitle, fio }),
            });

            if (!response.ok) {
                throw new Error("Ошибка при получении документа");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${docTitle}.pdf`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error("Ошибка загрузки документа:", error);
        }
    };

    return (
        <div className='listing__documents'>
            {documents.map((doc, index) => (
                <div key={index} className='product'>
                    <h2 className='product__title'>{doc.title}</h2>
                    <p className='product__description'>{doc.description}</p>
                    <span className='product__price'>Цена: Договорная</span>
                    <button className='product__button' onClick={() => handleBuy(doc.title)}>Купить</button>
                </div>
            ))}
        </div>
    );
}
