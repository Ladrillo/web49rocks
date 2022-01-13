import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState('web 49 rocks')

  // useEffect(() => {
  //   fetch('/hello')
  //     .then(res => res.json())
  //     .then(d => setData(d))
  // })

  return (
    <div className="App">
      <header className="App-header">
        {data}
      </header>
    </div>
  );
}

export default App;
