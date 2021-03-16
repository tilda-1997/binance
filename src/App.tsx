import React from 'react';
import styled from 'styled-components'
import Chart from './Components/chart';
import { AiOutlineFrown, AiOutlineSmile } from "react-icons/ai";

// background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
// background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);

const Div = styled.div`
  min-height: 900px;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
`
const H1 = styled.h2`
    padding: 4px 16px;
    color: #286B7B;
    font-family: Optima;
`

function App() {
  return (
    <Div>
      <H1> Binance Case</H1>
      <AiOutlineFrown />
      <AiOutlineSmile />
      <Chart />
    </Div>
  );
}

export default App;
