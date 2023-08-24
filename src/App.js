import React from 'react';
import Plus10 from './components/Plus10';
import './App.css';

function App() {
  const [showPlus10, setShowPlus10] = React.useState(false);

  function onShowPlus10(value){
    setShowPlus10(value);
  }
  return (
    <div className="App">
      {!showPlus10 && <h1 className='App--title'>BSCS 3A Treasure</h1>}
      <div className='buttons-events'>
        {!showPlus10 && <button className='btn-events' onClick={()=>onShowPlus10(true)}>Arkila sang Bible Baptist Church</button>}
      </div>
      {showPlus10 && <Plus10 showPlus10 = {showPlus10} onShowPlus10={onShowPlus10}/>}
    </div>
  );
}

export default App;
