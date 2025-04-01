import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main.css';
import Header from './components/Header/Header';
import AboutSite from './components/AboutSite/AboutSite';
import WhyThisCompany from './components/WhyThisCompany/WhyThisCompany';
import PopularQuestions from './components/PopularQuestions/PopularQuestions';
import Accout from './components/Accout/Accout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import DocumentsListring from './components/DocumentsListing/DocumentsListing';
import Contacts from './components/Contacts/Contacts';
import SupportChat from './components/SupportChat/SupportChat';
import AdminPanel from './components/AdminPanel/AdminPanel';
import useSmoothScroll from './smoothScroll';

function App() {
  useSmoothScroll();

  const [showSnow, setShowSnow] = useState(true);
  const [fioGlobal, setFioGlobal] = useState('Хуета');
  const [balanceGlobal, setBalanceGlobal] = useState(0);
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSnow(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const adInterval = setInterval(() => {
      setShowAd(true);
    }, 60000); // Реклама каждую минуту

    return () => clearInterval(adInterval);
  }, []);

  return (
    <Router>
      <div className="app">
        {showSnow && (
          <div className="снежинки__контейнер">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="снежинка">❄</div>
            ))}
          </div>
        )}
        
        {showAd && (
          <div className="ad-modal">
            <div className="ad-content">
              <h2>🔥 Внимание! Лучшая реклама здесь! 🔥</h2>
              <p>Купите наше супер-предложение прямо сейчас!</p>
              <p>Надоела реклама? Купи админку!</p>
              <button onClick={() => setShowAd(false)}>Закрыть</button>
            </div>
          </div>
        )}
        
        <Header />
        <div className='мейн'>
          <Routes>
            <Route path="/" element={<><AboutSite /> <WhyThisCompany /> <PopularQuestions /></>} />
            <Route path='/account' element={<Accout fio={fioGlobal} balance={balanceGlobal} />}></Route>
            <Route path='/login' element={<Login setFio={setFioGlobal} fioGlobal={fioGlobal} setBalance={setBalanceGlobal} balance={balanceGlobal} />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/documents' element={<DocumentsListring fio={fioGlobal} />}></Route>
            <Route path='/contacts' element={<Contacts />}></Route>
            <Route path='/admin' element={<AdminPanel />}></Route>
          </Routes>
        </div>
        <SupportChat />
      </div>
    </Router>
  );
}

export default App;
