import React,{useEffect} from 'react';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router';
import Nav_Bar from './components/Nav_Bar'
import MyFooter from './components/Footer';
import AOS from 'aos'

function App(){
  useEffect(() =>{
    AOS.init()
  })
  return (
      <div className='default'>
          <Nav_Bar/>
        <Router></Router>
       <MyFooter></MyFooter>
      </div>
  );
}

export default App;
