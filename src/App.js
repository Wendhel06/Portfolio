import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import GitHub from './Components/Github';
import Contato from './Components/Contato';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/github" element={<GitHub />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
