import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';


function App() {
  const {OnToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={OnToggleButton}>toggle</button>
    </div>
  );
}

export default App;
