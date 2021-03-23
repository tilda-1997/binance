import { useSelector } from "react-redux";
import { Line } from '@reactchartjs/react-chart.js'
import styled from "styled-components";

const Div = styled.div`
  width  : 700px;
  padding: 30px 30px 60px 10px;
`

export default function HighLowBid () {

    const highBid   = useSelector((state) => state.webReducer.bidPrice_max)
    const lowBid    = useSelector((state) => state.webReducer.bidPrice_min)
    const eventList = useSelector((state) => state.webReducer.eventTime)

    const highLowBids = {
        labels  : eventList,
        datasets: [
          {
            label      : '# Highest Bid Price',
            data       : highBid,
            fill       : false,
            borderColor: '#FA8079',
            pointRadius: 0,
            fill       : false,
            lineTension: 0,
            borderWidth: 2
          },
          {
            label      : '# Lowest Bid Price',
            data       : lowBid,
            fill       : false,
            borderColor: '#B1D1A6',
            pointRadius: 0,
            fill       : false,
            lineTension: 0,
            borderWidth: 2
          },
        ],
    }

    const options = {
        title: {
            display: true,
            text   : 'High & low price of bids'
          },
        scales: {
            tooltips: {
                enabled : false,
                mode    : 'index',
                position: 'average',
            },
            hover: {
                mode     : 'index',
                intersect: true
            },
        xAxes: [{
            ticks: {
                callback: (dataLabel, index) => {
                return index % 10 === 0 ? dataLabel : '';
            }}
            }],
        yAxes: [
            {
              scaleLabel: {
                display    : true,
                labelString: 'price (x0.001)',
                color      : '#F7F8F6'
                },  
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      }

    return(
        <Div>
         <Line data = {highLowBids} options = {options} />
        </Div>
    )
}