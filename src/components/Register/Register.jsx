import { useState } from 'react';
import './Register.css';

export default function Register() {
    const [name, setName] = useState('');

    const handleRegister = () => {
        if (name.trim() === '') {
            return;
        }
        const randomAccount = Math.floor(Math.random() * 9000000000) + 1000000000;
    };

    return (
        <div className='регистрация__контейнер'>
            <div className='регистрация__блок'>
                <h2 className='регистрация__заголовок'>Регистрация</h2>
                <label className='регистрация__метка'>Введите имя:</label>
                <input 
                    type="text" 
                    className='регистрация__поле' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Ваше Имя"
                />
                <button className='регистрация__кнопка' onClick={handleRegister}>Зарегистрироваться</button>
                <div>
                    <a href='/login'>Есть аккаунт?</a><span>Зарегистрироваться</span>
                </div>
            </div>
        </div>
    );
}
