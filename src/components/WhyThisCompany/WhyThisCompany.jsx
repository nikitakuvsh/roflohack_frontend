import './WhyThisCompany.css';

export default function WhyThisCompany() {
    return (
        <div className='почему__мы? почему__мы'>
            <div className='почему__мы--блок'>
                <div className='why__title'>
                    <div className='why__title--h1'>Почему именно мы?</div>
                </div>
                <div className='why__description'>
                    <div className='why__title--p'>Мы – это команда профессионалов, работающая с одним единственным принципом: мы умеем делать невозможное возможным.</div>
                </div>
                <div className='why__points'>
                    <div className='why__point'>
                        <div className='why__title--h2'>Инновации</div>
                        <div className='why__title--p'>Наши решения всегда на шаг впереди. Мы разрабатываем инновационные подходы и всегда готовы внедрять новейшие технологии.</div>
                    </div>
                    <div className='why__point'>
                        <div className='why__title--h2'>Качество</div>
                        <div className='why__title--p'>Мы придерживаемся высоких стандартов качества на каждом этапе работы, гарантируя исключительный результат для наших клиентов.</div>
                    </div>
                    <div className='why__point'>
                        <div className='why__title--h2'>Ответственность</div>
                        <div className='why__title--p'>Каждый проект для нас важен, и мы несем полную ответственность за его результат, чтобы удовлетворить потребности клиента на 100%.</div>
                    </div>
                </div>
                <div className='why__testimonial'>
                    <div className='why__testimonial--h3'>Что говорят наши клиенты</div>
                    <div className='why__title--p'>“Работать с этой компанией – это всегда гарантированное качество и надежность. Рекомендую всем! Доволен своей справкой для физкультуры”</div>
                    <div className='why__title--p'>– Иванов Иван Кириллович</div>
                </div>
            </div>
        </div>
    );
}
