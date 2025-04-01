import './Header.css';

export default function Header() {
    return (
        <div className='самый_вверх' style={{ backgroundColor: 'yellow', padding: '10px' }}>
            <nav style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="меню">
                    <li style={{ listStyle: 'none', display: 'inline', margin: '0 15px', fontWeight: 'bold' }}>Главная</li>
                    <li style={{ listStyle: 'none', display: 'inline', margin: '0 15px', fontWeight: 'bold' }}>Получить справку</li>
                    <li style={{ listStyle: 'none', display: 'inline', margin: '0 15px', fontWeight: 'bold' }}>Контакты</li>
                </div>
            </nav>
        </div>
    );
}
