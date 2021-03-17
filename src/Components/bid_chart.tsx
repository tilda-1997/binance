import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux";
import { BidProps, DataSet } from '../Type'
import { Line } from '@reactchartjs/react-chart.js'


export default function Chart () {

    // const bidList = useSelector((state: RootState) => state.webReducer.list)
    const bidList = useSelector((state: RootState) => state.webReducer.bids)
    const askList = useSelector((state: RootState) => state.webReducer.asks)
    const eventList = useSelector((state: RootState) => state.webReducer.eventTime)

    const askList_x = useSelector((state: RootState) => state.webReducer.asks_x)
    const askList_y = useSelector((state: RootState) => state.webReducer.asks_y)

    const data_bids:BidProps = {
        labels: askList_x,
        datasets: [
          {
            label: '# bids',
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

    // console.log('app', bidList, eventList)

    return(
        <>
        <p></p>
         {/* <Line data={data_bids} options={options} /> */}
        </>
    )
}