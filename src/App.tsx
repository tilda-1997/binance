import React from 'react';
import styled from 'styled-components'
import StateIcon from './Components/state';
import { AiFillBank } from 'react-icons/ai'
import HighLowAsk from './Components/high&lowAsk';
import HighLowBid from './Components/high&lowBid';
import HighAskBid from './Components/ask_bid_high';
import LowAskBid from './Components/ask_bid_low';
import './App.css'


const Div = styled.div`
  margin:0;
  padding: 0;
  height: 100%;
  width: 100%;
  min-height: 1100px;
  background-color: rgb(20, 21, 26)
`
const H1 = styled.h1`
    padding: 12px 8px 0px 16px;
    color: #DCE3EF;
    font-family: Optima;
    text-align: center
`
const ChartDiv = styled.div`
  display: grid;
  grid-template-columns: [c-start] auto [c-line] auto [c-end];
`

function App() {
  return (
   
    <Div>
      <H1> <AiFillBank style= {{ width: '28px', height: '28px'}} /> Binance Case - Depth of BNB-BTC </H1>
      <StateIcon />

      <ChartDiv>
        <HighLowAsk />
        <HighLowBid />
        <HighAskBid />
        <LowAskBid />
      </ChartDiv>
      
    </Div>
   
  );
}

export default App;
