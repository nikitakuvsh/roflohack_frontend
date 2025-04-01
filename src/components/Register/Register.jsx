import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
    const [email, setName] = useState('');
	const [password, setPassword] = useState('');
    const [fio, setFio] = useState('');
    const [account, setAccount] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('logged')) {
            navigate('/account');
        }
    }, [navigate]); // useEffect запускается при монтировании


    const connectSocket = () => {
        const ws = new WebSocket('ws://localhost:8765/register');
        ws.onopen = () => {
            console.log('Connected to WebSocket server');
            setSocket(ws);
        };
        ws.onmessage = (messageEvent) => {
            const data = JSON.parse(messageEvent.data);
            if (data.error) {
                setError(data.error);
                setMessage('');
            } else {
                setMessage(data.message);
                setError('');
                navigate('/login');
            }
        };
        ws.onerror = (err) => {
            console.error('Socket encountered error: ', err, 'Closing socket');
            ws.close();
        };
    };

    const handleRegister = () => {
        if (email.trim() === '') {
            setError("Введите имя");
            return;
        }
        if (!socket || socket.readyState !== WebSocket.OPEN) {
            connectSocket();
            setTimeout(() => {
                if (socket && socket.readyState === WebSocket.OPEN) {
                    socket.send(JSON.stringify({ email, password,fio }));
                }
            }, 500);
        } else {
            socket.send(JSON.stringify({ email, password,fio }));
        }
    };

    return (
        <div className='регистрация__контейнер'>
            <div className='регистрация__блок'>
                <h2 className='регистрация__заголовок'>Регистрация</h2>
                <label className='регистрация__метка'>Введите имя:</label>
                <input 
                    type="text" 
                    className='регистрация__поле' 
                    value={email} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Ваша почта"
                />
				<input 
                    type="text" 
                    className='регистрация__поле' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Ваш пароль(только цифры от 0 до          8)"
                />
                <input 
                    type="text" 
                    className='регистрация__поле' 
                    value={fio} 
                    onChange={(e) => setFio(e.target.value)} 
                    placeholder="Ваше Имя"
                />
				
                <button className='регистрация__кнопка' onClick={handleRegister}>
                    Зарегистрироваться
                </button>
                {error && <p className="регистрация__ошибка">{error}</p>}
                {message && <p className="регистрация__успех">{message}</p>}
                {account && <p className="регистрация__аккаунт">Ваш аккаунт: {account}</p>}
                <div>
                    <a href='/login'>Есть аккаунт?</a> <span>Зарегистрироваться</span>
                </div>
            </div>
        </div>
    );
}
