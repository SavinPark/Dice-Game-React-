import React, {useState} from 'react';
import Button from './Button';
import Board from './Board';
import './App.css';

function random(n) {
  return Math.ceil(Math.random() * n)
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);
  
  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  }
  // 초기화 Btn
  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  }

  return (
    <div className='App'>
      {/* 버튼 컴포넌트 */}
      <div>
        <Button className="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
        <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
      </div>
      {/* 보드 컴포넌트 */}
      <div>
        <Board name="Player 1" color="blue" gameHistory={myHistory} />
        <Board name="Player 2" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;
