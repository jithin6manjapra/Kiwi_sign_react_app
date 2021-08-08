import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {FirebaseData} from "./Firebase/Config"
import {FirebaseContext} from "./Store/FirebaseContext"

ReactDOM.render(
  <React.StrictMode>
   <FirebaseContext.Provider value={{FirebaseData}}>
    <App />
 </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

