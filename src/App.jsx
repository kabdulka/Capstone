import logo from './logo.svg';
import './App.scss';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './pages/Search/Search';
import SelectedMovie from './pages/SelectedMovie/SelectedMovie';
import WatchList from './pages/WatchList/WatchList';

function App() {

  
  return (

    <>

      <BrowserRouter>
      
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/search"
            element={<Search />}
          />

          <Route 
            path="/:movieId"
            element={<SelectedMovie />}
          />

          <Route 
            path="/likedMovies"
            element={<WatchList/>}
          />

        </Routes>
      
      </BrowserRouter>

    </>

  );
}

export default App;
