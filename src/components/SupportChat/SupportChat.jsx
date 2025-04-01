import { useState, useEffect } from 'react';
import './SupportChat.css';

export default function SupportChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Здравствуйте! Какой пароль от вашего аккаунта?", from: "bot" },
        { text: "Почему не отвечаете?????", from: "bot" }
    ]);
    const [unreadCount, setUnreadCount] = useState(messages.length);
    const [newMessage, setNewMessage] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setUnreadCount(0);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) {
                setUnreadCount(prev => prev + 1);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [isOpen]);

    // Заглушка для эмуляции бэкенда (бот отвечает через 2 секунды)
    const fakeBackendResponse = () => {
        setTimeout(() => {
            const botReplies = [
                "Мы передали ваш запрос в отдел 'Не важно'.",
                "Ваше обращение отправлено в корзину.",
                "Ожидайте ответ в течение 99 лет.",
                "Техподдержка сейчас обедает, попробуйте завтра!"
            ];
            const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
            setMessages(prev => [...prev, { text: randomReply, from: "bot" }]);
            if (!isOpen) {
                setUnreadCount(prev => prev + 1);
            }
        }, 2000);
    };

    // Функция отправки сообщений
    const sendMessage = () => {
        if (newMessage.trim() === '') return;

        const userMessage = { text: newMessage, from: "user" };
        setMessages(prev => [...prev, userMessage]);
        setNewMessage('');
        fakeBackendResponse();
    };

    return (
        <div className='support__chat'>
            <div className='support__circle' onClick={toggleChat}>
                💬
                {unreadCount > 0 && <span className="message__count">{unreadCount}</span>}
            </div>

            {isOpen && (
                <div className='support__window'>
                    <div className='support__header'>
                        <span>Чат с поддержкой</span>
                        <button className='support__close' onClick={toggleChat}>✖</button>
                    </div>
                    <div className='support__messages'>
                        {messages.map((msg, index) => (
                            <div key={index} className={`support__message support__message--${msg.from}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className='support__input'>
                        <input 
                            type='text' 
                            placeholder='Напишите сообщение...' 
                            value={newMessage} 
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        />
                        <button onClick={sendMessage}>📨</button>
                    </div>
                </div>
            )}
        </div>
    );
}
