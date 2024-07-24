import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Nopage from './components/Nopage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" elemet={<Register/>}/>
        <Route path="/Login" elemet={<Login/>}/>
        <Route path="/Nopage" elemet={<Nopage/>}/>
        <Route path="/Homepage" elemet={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
