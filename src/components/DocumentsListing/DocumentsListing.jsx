import { useState, useEffect } from 'react';
import './DocumentsListing.css';

// Заглушка для API (просто замени `fetchDocuments` на реальный запрос)
const fetchDocuments = async () => {
    // ❗ Здесь вставь реальный API-запрос
    return [
        { title: "Справка от физкультуры", description: "Справка форма №5 подойдёт для вузов и школ." },
        { title: "Лицензия на телепортацию", description: "Действует в пределах Солнечной системы." },
        { title: "Диплом Гарварда", description: "Настоящий диплом с печатью Министерства магии." },
        { title: "Паспорт гражданина Луны", description: "Официальный документ, подтверждающий гражданство Луны." },
        { title: "Разрешение на безделье", description: "Позволяет не работать. Подписано важными людьми." }
    ];
};

export default function DocumentsListing() {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        fetchDocuments().then(setDocuments); // Загрузка документов
    }, []);

    return (
        <div className='listing__documents'>
            {documents.map((doc, index) => (
                <div key={index} className='product'>
                    <h2 className='product__title'>{doc.title}</h2>
                    <p className='product__description'>{doc.description}</p>
                    <span className='product__price'>Цена: Договорная</span>
                    <button className='product__button'>Купить</button>
                </div>
            ))}
        </div>
    );
}
