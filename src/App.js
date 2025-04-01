import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main.css';
import Header from './components/Header/Header';
import AboutSite from './components/AboutSite/AboutSite';
import WhyThisCompany from './components/WhyThisCompany/WhyThisCompany';
import PopularQuestions from './components/PopularQuestions/PopularQuestions';
import Accout from './components/Accout/Accout';
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
              <div key={i} className="снежинка"></div>
            ))}
          </div>
        )}
        <Header />
        <div className='мейн'>
          <Routes>
            <Route path="/" element={<><AboutSite /> <WhyThisCompany /> <PopularQuestions /></>} />
            <Route path='/account' element={<Accout />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
