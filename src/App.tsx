import React from 'react';
import styled from 'styled-components'
import AskChart from './Components/chart_ask';
import StateIcon from './Components/state';
import { AiFillBank, AiFillSlackSquare } from 'react-icons/ai'
import BidChart from './Components/chart_bid';

// background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
// background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);

const Div = styled.div`
  min-height: 900px;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
`
const H1 = styled.h1`
    padding: 8px 8px 0px 16px;
    color: #F7FCFB;
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
      <H1> <AiFillBank style= {{ width: '28px', height: '28px'}} /> Binance Case </H1>
      <StateIcon />

      <ChartDiv>
        <AskChart />
        <BidChart />
      </ChartDiv>
      
    </Div>
  );
}

export default App;
