import './DocumentsListing.css';

const documents = [
    {
        title: "Справка от физкультуры",
        description: "Справка форма №5 подойдёт для вузов и школ, для колледжей не подходит",
    },
    {
        title: "Лицензия на телепортацию",
        description: "Действует в пределах солнечной системы. Нарушение скоростного режима карается временной блокировкой.",
    },
    {
        title: "Диплом Гарварда",
        description: "Настоящий диплом, подтверждённый печатью министерства магии. Гарантия 1 год.",
    },
    {
        title: "Паспорт гражданина Луны",
        description: "Официальный документ, подтверждающий ваше гражданство Луны. Доставка ракетой.",
    },
    {
        title: "Разрешение на безделье",
        description: "С этим документом можно не работать и не делать ничего. Подписано самыми важными людьми.",
    }
];

export default function DocumentsListing() {
    return (
        <div className='listing__documents'>
            {documents.map((doc, index) => (
                <div key={index} className='product'>
                    <h2 className='product__title'>{doc.title}</h2>
                    <p className='product__description'>{doc.description}</p>
                    <span className='product__price'>Цена: Договорная</span>
                    <button className='product__button'>Купить</button>
                </div>
            ))}
        </div>
    );
}
