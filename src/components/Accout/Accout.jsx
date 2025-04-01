import './Accout.css';
import { useState } from 'react';
import defaultImage from '../../images/default-account-image.png';

export default function Accout() {
    const [balance, setBalance] = useState(1000); // Баланс начинается с 1000
    const [status, setStatus] = useState("Вы в списке доверенных пользователей!");

    const handleWithdraw = () => {
        setBalance(prev => prev - (Math.random() * 500).toFixed(2)); // "Пополнение" уменьшает баланс
        setStatus("Ваши средства успешно отправлены в неизвестность!");
    };

    return (
        <div className='аккаунт'>
            <div className='аккаунт__блок'>
                <div className='аккаунт__изображение'>
                    <img className='аватарка' alt='Аватарка пользователя' src={defaultImage} title='Вы' />
                </div>
                <div className='аккаунт__заголовок'>ФИО: Иван Иванович Доверчивый</div>
                <div className='аккаунт__баланс'>
                    <h2 className='баланс__счет'>Ваш баланс: {balance} ₽</h2>
                    <button className='аккаунт__кнопка' onClick={handleWithdraw}>Пополнить</button>
                    <p className='аккаунт__статус'>{status}</p>
                </div>
            </div>
        </div>
    );
}
