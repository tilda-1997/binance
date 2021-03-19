import React from 'react';
import styled from 'styled-components'
import AskChart from './Components/chart_ask';
import StateIcon from './Components/state';
import { AiFillBank } from 'react-icons/ai'
import BidChart from './Components/chart_bid';
import MaxBid from './Components/max_bid'
import AskAndBid from './Components/ask&bid';
import HighLowAsk from './Components/high&lowAsk';

// background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
// background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);

const Div = styled.div`
  margin:0;
  padding: -10;
  height: 100%;
  width: 100%;
  min-height: 1000px;
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
        {/* <AskChart />
        <BidChart /> */}
        <HighLowAsk />
        <AskAndBid />
        <MaxBid />
      </ChartDiv>
      
    </Div>
  );
}

export default App;
