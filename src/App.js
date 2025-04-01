import './main.css';
import Header from './components/Header/Header';
import AboutSite from './components/AboutSite/AboutSite';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='мейн'>
        <AboutSite />
      </div>
    </div>
  );
}

export default App;
