import { useState } from 'react';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("Ошибка 418: Я – чайник. Попробуйте снова позже.");
    };

    return (
        <div className='логин__контейнер'>
            <div className='логин__блок'>
                <h2 className='логин__заголовок'>Авторизация</h2>
                <form onSubmit={handleSubmit}>
                    <label className='логин__метка'>Электронная почта:</label>
                    <input 
                        type="email" 
                        className='логин__поле' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="example@gmail.com"
                    />

                    <label className='логин__метка'>Пароль:</label>
                    <input 
                        type="password" 
                        className='логин__поле' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="********"
                    />

                    <button type="submit" className='логин__кнопка'>Войти</button>
                    <div>
                        <a href='/register'>Нет аккаунта? </a> <span>Выйти</span>
                    </div>
                </form>
                {error && <p className='логин__ошибка'>{error}</p>}
            </div>
        </div>
    );
}
