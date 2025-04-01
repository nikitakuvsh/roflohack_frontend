import './Accout.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultImage from '../../images/default-account-image.png';

export default function Accout({ fio, balance }) {
    const [status, setStatus] = useState("Вы в списке доверенных пользователей!");
    const navigate = useNavigate();

    return (
        <div className='аккаунт'>
            <div className='аккаунт__блок'>
                <div className='аккаунт__изображение'>
                    <img className='аватарка' alt='Аватарка пользователя' src={defaultImage} title='Вы' />
                </div>
                <div className='аккаунт__заголовок'>ФИО: {fio}</div>
                <div className='аккаунт__баланс'>
                    <h2 className='баланс__счет'>Ваш баланс: {balance} ₽</h2>
                    <button className='аккаунт__кнопка'>Пополнить</button>
                    <p className='аккаунт__статус'>{status}</p>
                </div>
                <button className='account__button' onClick={() => {localStorage.removeItem('logged'); navigate('/login');}}>Выйти</button>
            </div>
        </div>
    );
}
