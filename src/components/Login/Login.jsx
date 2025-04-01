import { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login({ setFio, fioGlobal, setBalance, balance }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
            if (localStorage.getItem('logged')) {
                navigate('/account');
            }
        }, [navigate]);

    const connectSocket = () => {
        const ws = new WebSocket('ws://localhost:8765/login');
        ws.onopen = () => {
            console.log('Connected to WebSocket server');
            setSocket(ws);
        };
        ws.onmessage = (messageEvent) => {
            const data = JSON.parse(messageEvent.data);
            if (data.error) {
                setError(data.error);
				console.log("ERROR");
                setMessage('');
            } else {
                setMessage(data.message);
				console.log("nonERROR");
                setError('');
                setFio(data.name);
                setBalance(data.balance);
                localStorage.setItem('logged', 'true');
                navigate('/profile');
            }
        };
        ws.onerror = (err) => {
            console.error('Socket encountered error: ', err, 'Closing socket');
            ws.close();
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === 'admin@admin' & password === 'admin') {
            localStorage.setItem('adminLogged', 'true');
            localStorage.setItem('logged', 'true');
            setFio('admin');
            setBalance(9999999999);
            navigate('/account');
        } else {
            if (!socket || socket.readyState !== WebSocket.OPEN) {
                connectSocket();
                setTimeout(() => {
                    if (socket && socket.readyState === WebSocket.OPEN) {
                        socket.send(JSON.stringify({ email, password }));
                    }
                }, 500);
            } else {
                socket.send(JSON.stringify({ email, password }));
            }
        }
    };

    return (
        <div className="логин__контейнер">
            <div className="логин__блок">
                <h2 className="логин__заголовок">Авторизация</h2>
                <form onSubmit={handleSubmit}>
                    <label className="логин__метка">Электронная почта:</label>
                    <input
                        type="email"
                        className="логин__поле"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@gmail.com"
                    />

                    <label className="логин__метка">Пароль:</label>
                    <input
                        type="password"
                        className="логин__поле"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********"
                    />

                    <button type="submit" className="логин__кнопка">Войти</button>
                    <div>
                        <a href="/register">Нет аккаунта? </a> <span>Выйти</span>
                    </div>
                </form>
                {error && <p className="логин__ошибка">{error}</p>}
                {message && <p className="логин__успех">{message}</p>}
            </div>
        </div>
    );
}
