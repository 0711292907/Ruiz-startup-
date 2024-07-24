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
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Nopage" element={<Noage />} />
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

