import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import home from './components/Home';

function App(){
  return (
    
      <div>
        <header>
          <h1>Encabezado</h1>
        </header>
        
        <footer>
          <p>Pie de página</p>
        </footer>
      </div>
  
  );
}

export default App;
