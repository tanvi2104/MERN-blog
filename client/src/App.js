import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import ArticlesList from './pages/ArticlesList.js';
import Article from './pages/Article.js';
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <Router>
    <Navbar />
    <div className='max-w-screen-md mx-auto pt-20'>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/artlist" element={ <ArticlesList /> } />
        <Route path="/article/:name" element={ <Article /> } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
