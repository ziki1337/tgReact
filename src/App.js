import { useEffect } from 'react';
import './App.css';
//import 'https://telegram.org/js/telegram-web-app';
const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, []);

  const OnClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      work
      <button onClick={OnClose}>Закрыть</button>
    </div>
  );
}

export default App;
