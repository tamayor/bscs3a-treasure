import React from 'react';
import Plus10 from './components/Plus10';
import TshirtSizeForm from './components/TshirtSizeForm';
import TshirtSize4ex from './components/TshirtSize4ex';
import COMSOCSem1 from './components/COMSOCSem1';
import './App.css';

function App() {
  const [showPlus10, setShowPlus10] = React.useState(false);
  const [showTshirtSize, setShowTshirtSize] = React.useState(false);
  const [showTshirtSizeForm, setShowTshirtSizeForm] = React.useState(false);
  const [showCOMSOCSem1, setShowCOMSOCSem1] = React.useState(false);
  function onShowPlus10(value){
    setShowPlus10(value);
  }
  function onShowTshirtSize(value){
    setShowTshirtSize(value);
  }
  function onShowTshirtSizeForm(value){
    setShowTshirtSizeForm(value)
  }
  function onShowCOMSOCSem1(value){
    setShowCOMSOCSem1(value)
  }
  return (
    <div className="App">
      {(!showPlus10 && !showTshirtSize && !showTshirtSizeForm && !showCOMSOCSem1) && <h1 className='App--title'>BSCS 3A Treasure</h1>}
      {(!showPlus10 && !showTshirtSize && !showTshirtSizeForm && !showCOMSOCSem1) && 
        <div className='buttons-events'>
          {!showPlus10 && <button className='btn-events' onClick={()=>onShowPlus10(true)}>Jeepney Rent Payment for the <br/>
            Bible Baptist Church Anniversary</button>}
          {/*
          <div className='tshirt-size-buttons'>
            {(!showTshirtSizeForm) && <button className='btn-events' onClick={()=>onShowTshirtSizeForm(true)}>Tshirt Form</button>}
            {(!showTshirtSize) && <button className='btn-events' onClick={()=>onShowTshirtSize(true)}>T-shirt size for <br/>Example</button>}
          </div> 
          */}
          {!showCOMSOCSem1 && <button className='active-event' onClick={()=>onShowCOMSOCSem1(true)}>COMSOC First Sem Payment</button>}
        </div>}
      {showCOMSOCSem1 && <COMSOCSem1 showCOMSOCSem1 = {showCOMSOCSem1} onShowCOMSOCSem1={onShowCOMSOCSem1}/>}
      {showPlus10 && <Plus10 showPlus10 = {showPlus10} onShowPlus10={onShowPlus10}/>}
      {showTshirtSize && <TshirtSize4ex showTshirtSize={showTshirtSize} onShowTshirtSize={onShowTshirtSize}/>}
      {showTshirtSizeForm && <TshirtSizeForm showTshirtSizeForm={showTshirtSizeForm}onShowTshirtSizeForm={onShowTshirtSizeForm}/>}
    </div>
  );
}

export default App;
