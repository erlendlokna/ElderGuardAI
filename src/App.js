import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Stream from './pages/Stream';
import Vitals from './pages/Vitals';
import Position from './pages/Position';

function App() {
  document.title="Elder Guard";
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/Vitals" element={<Vitals />} />
            <Route path="/Stream" element={<Stream/>} />
            <Route path="/Position" element={<Position/>} />

          </Routes>
        </Router>

    </div>
  );
}

export default App;