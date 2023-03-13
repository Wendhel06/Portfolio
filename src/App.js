import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route  path='/' element={<Home />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div> 
  )
}

export default App;
