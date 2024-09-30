import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import TodoMain from './Components/TodoMain/TodoMain';
import CountriesBox from './Components/Countries/CountriesBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/todo' element={<TodoMain />}></Route>
        <Route path='/countries' element={<CountriesBox />}></Route>
        <Route path='/*' element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
