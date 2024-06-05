import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Board from './containers/Board';

export default function App() {
  const [difficulty, setDifficulty] = useState('Easy');

  function handleDiff(event) {
    setDifficulty(event.target.value);
  }

  return (
    <>
      <div className='app-name'>Sapper</div>
      <div className='app-div'>
        <Header difficulty={difficulty} handleDiff={handleDiff} />
        <Board difficulty={difficulty} />
      </div>
    </>
  );
}
