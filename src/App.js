// Components
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

//pages
import Home from './pages/Home';
import Search from './pages/Search';
import MovieDetails from './pages/MovieDetails';

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
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route 
            path="*" 
            element={<NotFound message="Página não encontrada!" type="page" />} 
          />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
