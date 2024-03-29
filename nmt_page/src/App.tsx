import React,{useEffect} from 'react';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router';
import NavBar from './components/NavBar'
import MyFooter from './components/Footer';
import AOS from 'aos'
import WhatsappButton from './components/whatsappButton';


function App(){
  useEffect(() =>{
    AOS.init()
  })
  return (
      <div className='default'>
          <NavBar/>
        <Router></Router>
        <WhatsappButton/>
       <MyFooter></MyFooter>
      </div>
  );
}

export default App;
