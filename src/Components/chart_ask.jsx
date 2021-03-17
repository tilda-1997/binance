import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Line } from '@reactchartjs/react-chart.js'
import styled from "styled-components";

const Div = styled.div`
  width: 600px;
  padding: 10px 80px;
`

export default function AskChart () {
    // const bidList = useSelector((state) => state.webReducer.bids)
    // const askList = useSelector((state) => state.webReducer.asks)
  

    const askList_x = useSelector((state) => state.webReducer.asks_x)
    const askList_y = useSelector((state) => state.webReducer.asks_y)

    const data_asks = {
        labels: askList_x,
        datasets: [
          {
            label: '# Asks to be updated',
            data: askList_y,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      }
    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }

    return(
        <Div>
         <Line data={data_asks} options={options} />
        </Div>
    )
}