import './Contacts.css';

export default function Contacts() {
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

                <h2 className='контакты-вопрос'>Часто задаваемый вопрос:</h2>
                <p className='контакты-вопрос-текст'><strong>Как с вами связаться?</strong> — Никак. Мы не отвечаем.</p>
            </div>
        </div>
    );
}
