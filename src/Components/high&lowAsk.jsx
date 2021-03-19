import { useSelector } from "react-redux";
import { Line } from '@reactchartjs/react-chart.js'
import styled from "styled-components";

const Div = styled.div`
  width: 680px;
  padding: 30px 80px 0px 60px;
`

export default function HighLowAsk () {

    const highAsk = useSelector((state) => state.webReducer.askPrice_max)
    const lowAsk =  useSelector((state) => state.webReducer.askPrice_min)
    const eventList = useSelector((state) => state.webReducer.eventTime)

    const highLowAsks = {
        labels: eventList,
        datasets: [
          {
            label: '# Highest Ask Price',
            data: highAsk,
            fill: false,
            backgroundColor: '#DD581E',
            borderColor: '#FEAB72',
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            borderWidth: 2
          },
          {
            label: '# Lowest Ask Price',
            data: lowAsk,
            fill: false,
            backgroundColor: '#44A5BD',
            borderColor: '#B0EBE7',
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            borderWidth: 2
          },
        ],
    }

    const options = {
        scales: {
            tooltips: {
                enabled: false,
                mode: 'index',
                // position: 'nearest',
                // custom: customTooltips
            },
            hover: {
                mode: 'index',
                intersect: true
            },
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'price',
                color: '#F7F8F6'
                },  
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      }

      console.log('hhh', lowAsk)
    return(
        <Div>
         <Line data={highLowAsks} options={options} />
        </Div>
    )
}