import './Header.css';
import headerLogo from '../../images/header-logo.png';
import { useNavigate } from 'react-router-dom';

export default function Header({ balance }) {

    const navigate = useNavigate();

    return (
        <div className='самый_вверх' style={{ backgroundColor: 'yellow', padding: '10px' }}>
            <div className='flex'>
                <div>
                    <h2 className='admin__title' onClick={() => localStorage.getItem('adminLogged') ? navigate('/admin') : navigate('/register')}>АДМИНКА</h2>
                </div>

                <div>
                    <img className='header__img' alt='' src={headerLogo} title='Логотип' onClick={() => navigate('/')} />
                </div>

                <div>
                    <nav style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="меню">
                            <li style={{ listStyle: 'none', display: 'inline', margin: '0 15px', fontWeight: 'bold' }} onClick={() => navigate('/')}>Главная</li>
                            <li style={{ listStyle: 'none', display: 'inline', margin: '0 15px', fontWeight: 'bold', cursor: 'default' }} onClick={() => navigate('/documents')}>Получить справку</li>
                            <li style={{ listStyle: 'none', display: 'inline', margin: '0 15px', fontWeight: 'bold' }} onClick={() => navigate('/contacts')}>Контакты</li>
                            <li style={{ listStyle: 'none', display: 'inline', margin: '0 15px', fontWeight: 'bold', fontStyle: 'italic'}} className='lk--button' onClick={() => localStorage.getItem('isLogged') ?  navigate('/account') : navigate('/login')}>Личный кабинет</li>
                            <li style={{ listStyle: 'none', display: localStorage.getItem('logged') || localStorage.getItem('admiinLogged') ? 'inline' : 'none', margin: '0 15px', fontWeight: 'bold' }}>Баланс: {balance}</li>

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
