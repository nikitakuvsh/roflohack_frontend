import "./AboutSite.css";
import { useState } from "react";

export default function AboutSite() {
    const [currentSite, setCurrentSite] = useState(null);
    const sites = [
        "https://lknpd.nalog.ru/auth/login"
    ];

    const navigate = () => {
        let index = 0;
        setCurrentSite(sites[index]);

        const interval = setInterval(() => {
            index++;
            if (index < sites.length) {
                setCurrentSite(sites[index]);
            } else {
                clearInterval(interval);
                setTimeout(() => setCurrentSite(null), 2000);
            }
        }, 2000);
    };

    return (
        <div className="о_сайте">
            <h1 className="важное_название">Министерство Важных Дел</h1>
            <p className="описание">Очереди без документов</p>
            <button className="кнопка_паники" onClick={navigate}>Оформить</button>
            {currentSite && (
                <iframe className="поддельный_сайт" src={currentSite} title="Виртуальная экскурсия" />
            )}
        </div>
    );
}