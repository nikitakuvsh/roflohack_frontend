import './AdminPanel.css';

export default function AdminPanel(){
    return (
        <div className='admin'>
            <div className='admin__block'>
                <h2 className='admin__title'>Многофункциональная админ-панель</h2>
                <button className='admin__button'>Дропнуть базу</button>
                <button className='admin__button'>Удалить все документы</button>
                <button className='admin__button'>Забрать все деньги пользователей себе</button>
            </div>
        </div>
    );
}