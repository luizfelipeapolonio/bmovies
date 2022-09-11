// Components
import Navbar from './components/Navbar';

//pages
import Home from './pages/Home';
import Search from './pages/Search';

// CSS
import './App.css';

// Lib itens
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
