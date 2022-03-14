import './App.css';
import Row from './components/MemberRow.js';
import Wss from './components/websocket';



function App() {

  
  return (
      
    <div className="App">
             
        <Row />
       <Wss /> 
      </div>
       
   );
}

export default App;