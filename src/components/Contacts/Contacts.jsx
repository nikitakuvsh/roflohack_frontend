import React, { useState } from 'react';
import './Contacts.css';

export default function Contacts() {
    const [currentMeme, setCurrentMeme] = useState('');

    const getRandomMeme = () => {
        const memes = [
            'https://i.imgflip.com/30b1gx.jpg',
            'https://i.imgflip.com/2h8yk2.jpg',
            'https://i.imgflip.com/1bij.jpg',
            'https://i.imgflip.com/4/2089b0.jpg',
            'https://i.imgflip.com/39t1h3.jpg',
        ];

        const randomMeme = memes[Math.floor(Math.random() * memes.length)];
        setCurrentMeme(randomMeme);
    };

    return (
        <div className='контакты'>
            <div className='контакты-блок'>
                <h1 className='контакты-заголовок'>Свяжитесь с нами!</h1>
                <p className='контакты-текст'>Наши специалисты НЕ ответят вам в ближайшее время.</p>

                <div className='контакты-способы'>
                    <div className='контакты-пункт'>
                        <span className='контакты-иконка'>📞</span> Телефон: <span className='контакты-данные'>8 (800) 555-35-35</span>
                    </div>
                    <div className='контакты-пункт'>
                        <span className='контакты-иконка'>✉️</span> Почта: <span className='контакты-данные'>support@minvazhdel.gov</span>
                    </div>
                    <div className='контакты-пункт'>
                        <span className='контакты-иконка'>🏢</span> Адрес: <span className='контакты-данные'>г. Неизвестноград, ул. Липовая, д. 0</span>
                    </div>
                </div>

                <div className='контакты-способы'>
                    <button className='кнопка_мемы' onClick={getRandomMeme}>
                        Показать мем
                    </button>
                </div>

                {currentMeme && (
                    <div className='мем'>
                        <img src={currentMeme} alt='Мем' />
                    </div>
                )}

                <h2 className='контакты-вопрос'>Часто задаваемый вопрос:</h2>
                <p className='контакты-вопрос-текст'><strong>Как с вами связаться?</strong> — Никак. Мы не отвечаем.</p>
            </div>
        </div>
    );
}

