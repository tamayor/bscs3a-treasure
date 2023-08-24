import React from 'react';
import Plus10 from './components/Plus10';
import TshirtSize4ex from './components/TshirtSize4ex';
import './App.css';

function App() {
  const [showPlus10, setShowPlus10] = React.useState(false);
  const [showTshirtSize, setShowTshirtSize] = React.useState(false);
  function onShowPlus10(value){
    setShowPlus10(value);
  }
  function onShowTshirtSize(value){
    setShowTshirtSize(value);
  }
  return (
    <div className="App">
      {(!showPlus10 && !showTshirtSize) && <h1 className='App--title'>BSCS 3A Treasure</h1>}
      {(!showPlus10 && !showTshirtSize) && 
        <div className='buttons-events'>
          {!showPlus10 && <button className='btn-events' onClick={()=>onShowPlus10(true)}>Jeepney Rent Payment for the <br/>
            Bible Baptist Church Anniversary</button>}
          {(!showTshirtSize) && <button className='btn-events' onClick={()=>onShowTshirtSize(true)}>T-shirt size for <br/>
            Example</button>}
        </div>}
      {showPlus10 && <Plus10 showPlus10 = {showPlus10} onShowPlus10={onShowPlus10}/>}
      {showTshirtSize && <TshirtSize4ex showTshirtSize={showTshirtSize} onShowTshirtSize={onShowTshirtSize}/>}
    </div>
  );
}

export default App;
