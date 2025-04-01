import './Header.css';
import headerLogo from '../../images/header-logo.png';

export default function Header() {
    return (
        <div className='самый_вверх' style={{ backgroundColor: 'yellow', padding: '10px' }}>
            <div className='flex'>
                <div>
                    <img className='header__img' alt='' src={headerLogo} title='Логотип' />
                </div>

                <div>
                    <nav style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="меню">
                            <li style={{ listStyle: 'none', display: 'inline', margin: '0 15px', fontWeight: 'bold' }}>Главная</li>
                            <li style={{ listStyle: 'none', display: 'inline', margin: '0 15px', fontWeight: 'bold', cursor: 'default' }}>Получить справку</li>
                            <li style={{ listStyle: 'none', display: 'inline', margin: '0 15px', fontWeight: 'bold' }}>Контакты</li>
                            <li style={{ listStyle: 'none', display: 'inline', margin: '0 15px', fontWeight: 'bold', fontStyle: 'italic'}} className='lk--button' >Личный кабинет</li>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
