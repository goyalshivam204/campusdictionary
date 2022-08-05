import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navbar from './Component/Navbar';
import Fimage  from './Component/Fimage';
import Textarea  from './Component/Textarea';
import Footer from './Component/Footer';
import SearchFilter from './Component/SearchFilter';
import {BrowserRouter,Route} from "react-router-dom";
import Signup from './Component/Signup';
import Signin from './Component/Signin';
import AddCollege from './Component/AddCollege';
import Forbidden from './Component/Forbidden';
import Map from './Component/Map';
import CollegeDash from './Component/CollegeDash';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Route exact path="/">
    <Fimage/>
    <SearchFilter/>
    <Textarea/> 
    <Map/>
    <Footer/>
    </Route>
    <Route path="/user/register">
      <Signup/>
    </Route>
    <Route path="/user/login">
      <Signin/>
    </Route>
    <Route path="/user/addcollege">
      <AddCollege/>
    </Route>
    {/* <Route path="/dashboard">
      <Map/>
    </Route> */}
    <Route path="/dash/UIET">
      <CollegeDash/>
    </Route>
    <Route path="/forbidden">
      <Forbidden/>
    </Route>

    
    
    </BrowserRouter>
  );
}

export default App;
