import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom'
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import Coin from './routes/Coin';


function App() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en'
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
     // console.log(response.data[0])
    }).catch((error) => {
      console.error(error)
    })
  }, [])


  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}> 
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
     

    </>
  );
}


export default App;
