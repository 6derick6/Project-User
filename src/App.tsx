import React, { useState } from 'react';
import Login from '../src/screens/Login';
import Cadastro from '../src/screens/Cadastro';
import Home from './screens/Home-Page';



function App() {

  const [activeScreen, setActiveScreen] = useState('Cadastro');

  return(
    <div className="App">
      {
        activeScreen == 'Cadastro' ?
          <Cadastro setActiveScreen={setActiveScreen} /> 
        : 
          <Login />
           
      }
      
      
          
    </div>
  ) 
}

export default App;