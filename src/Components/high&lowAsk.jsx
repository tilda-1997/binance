import { useSelector } from "react-redux";
import { Line } from '@reactchartjs/react-chart.js'
import styled from "styled-components";

const Div = styled.div`
  width  : 700px;
  padding: 30px 80px 60px 60px;
`

export default function HighLowAsk () {

    const highAsk   = useSelector((state) => state.webReducer.askPrice_max)
    const lowAsk    = useSelector((state) => state.webReducer.askPrice_min)
    const eventList = useSelector((state) => state.webReducer.eventTime)

    const highLowAsks = {
        labels  : eventList,
        datasets: [
          {
            label      : '# Highest Ask Price',
            data       : highAsk,
            borderColor: '#FEAB72',
            pointRadius: 0,
            fill       : false,
            lineTension: 0,
            borderWidth: 2
          },
          {
            label      : '# Lowest Ask Price',
            data       : lowAsk,
            borderColor: '#B0EBE7',
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
            text   : 'High & low price of ask'
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
            yAxes: [{
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
         <Line data = {highLowAsks} options = {options} />
        </Div>
    )
}