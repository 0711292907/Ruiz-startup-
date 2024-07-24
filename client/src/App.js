import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import NoPage from './components/NoPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Routes path="/" elemet={<Register/>}/>
        <Routes path="/Login" elemet={<Login/>}/>
        <Routes path="/NoPage" elemet={<NoPage/>}/>
        <Routes path="/Homepage" elemet={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
