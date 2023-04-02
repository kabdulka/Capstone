import logo from './logo.svg';
import './App.scss';
import axios from 'axios';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';



function App() {

  
  return (

    

    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />

        </Routes>
      
      </BrowserRouter>

    </>

  );
}

export default App;
