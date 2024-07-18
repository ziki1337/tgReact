import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';


function App() {
  const {OnToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <button onClick={OnToggleButton}>toggle</button>
    </div>
  );
}

export default App;
