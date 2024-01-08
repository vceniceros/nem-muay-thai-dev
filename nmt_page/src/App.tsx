import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router';
import Nav_Bar from './components/Nav_Bar'
import MyFooter from './components/Footer';
function App(){
  return (
      <div>
          <Nav_Bar/>
        <Router></Router>
       <MyFooter></MyFooter>
      </div>
  );
}

export default App;
