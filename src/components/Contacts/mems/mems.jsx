import React from 'react';
import ReactDOM from 'react-dom/client';
import MemeButton from './components/MemeButton';

const App = () => {
  return (
    <div>
      <h1>Секретная кнопка мемов</h1>
      <MemeButton />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
