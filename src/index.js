import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {FirebaseData} from "./Firebase/Config"
import Context from './store/FirebaseContext'
import {FirebaseContext} from "./store/FirebaseContext"

ReactDOM.render(
  <React.StrictMode>
   <FirebaseContext.Provider value={{FirebaseData}}>
   <Context>
    <App />
    </Context>
 </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

