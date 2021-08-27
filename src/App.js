import React, {Component} from 'react';
import './App.css';

import { TraditionalAlert, TitledAlert, OrangeAlert } from './importing';
 
//import TailwindcssButton from './components/TailwindcssButton';

class App extends Component{
  render(){
    return(
      <div>
        <TraditionalAlert alert="Ma3rftch" textalert="      ùddùa^^ù      " />
        <br />
        <OrangeAlert alert="hey there" textalert="it's suppose to be new" />
        <br />
        <TitledAlert />
      </div>
      
    );
    
  }
}

export default App;