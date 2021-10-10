import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles.css"
import { getAllCountries } from "./service";
import Countries from "./components/Countries";




getAllCountries().then(res=>{
  let random15 = []
  let niz = res.data
  for (let i = 0; i < 15; i++) {
    
    random15.push(niz[Math.floor(Math.random()* niz.length)])
  }

    console.log(...Countries(random15));
    document.body.append(...Countries(random15));
})

   
  
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


