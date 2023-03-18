import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Stream from './pages/Stream';

function App() {
  document.title="Elder Guard";
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/Stream" element={<Stream/>} />

          </Routes>
        </Router>

    </div>
  );
}

export default App;