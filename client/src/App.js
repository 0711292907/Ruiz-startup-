import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

