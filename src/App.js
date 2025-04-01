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
import useSmoothScroll from './smoothScroll';

function App() {
  useSmoothScroll();

  const [showSnow, setShowSnow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSnow(false);
    }, 3000);
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
        <Header />
        <div className='мейн'>
          <Routes>
            <Route path="/" element={<><AboutSite /> <WhyThisCompany /> <PopularQuestions /></>} />
            <Route path='/account' element={<Accout />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/documents' element={<DocumentsListring />}></Route>
            <Route path='/contacts' element={<Contacts />}></Route>
          </Routes>
        </div>
        <SupportChat />
      </div>
    </Router>
  );
}

export default App;
