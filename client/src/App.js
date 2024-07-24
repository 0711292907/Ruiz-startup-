import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Homepage from './components/Homepage'
import Login from './components/Login'
import Register from './components/Register'
import NoPage from './components/NoPage'


function App() {
  return (
    <div className="App">
      <BroswerRouter>
      <Routes>
        <Routes path="/" elemet={<Register/>}/>
        <Routes path="/Login" elemet={<Login/>}/>
        <Routes path="/Nopage" elemet={<NoPage/>}/>
        <Routes path="/Homepage" elemet={<Homepage/>}/>
      </Routes>
      </BroswerRouter>
    </div>
  );
}

export default App;
