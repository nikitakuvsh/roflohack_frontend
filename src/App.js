import './main.css';
import Header from './components/Header/Header';
import AboutSite from './components/AboutSite/AboutSite';
import WhyThisCompany from './components/WhyThisCompany/WhyThisCompany';
import PopularQuestions from './components/PopularQuestions/PopularQuestions';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='мейн'>
        <AboutSite />
        <WhyThisCompany />
        <PopularQuestions />
      </div>
    </div>
  );
}

export default App;
