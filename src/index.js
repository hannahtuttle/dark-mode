import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import AboutPage from './components/about.js'

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <NavLink to={'/charts-page'}><div>Charts</div></NavLink>
      <NavLink to={'/about-page'}><div>About</div></NavLink>
      <Route path='/charts-page' render={() => <Charts coinData={coinData}/> }/>
      <Route path='/about-page' exact component={AboutPage}/>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
