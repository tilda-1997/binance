import { useSelector } from "react-redux";
import { Line } from '@reactchartjs/react-chart.js'
import styled from "styled-components";

const Div = styled.div`
  width: 680px;
  padding: 30px 80px 0px 60px;
`

export default function AskAndBid () {

    const bidPrice = useSelector((state) => state.webReducer.bids_x)
    const askPrice =  useSelector((state) => state.webReducer.asks_x)
    const eventList = useSelector((state) => state.webReducer.eventTime)

    const max_data_bids = {
        labels: eventList,
        datasets: [
          {
            label: '# Ask',
            data: askPrice,
            fill: false,
            backgroundColor: '#89BEB5',
            borderColor: '#C5E3DB',
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            borderWidth: 2
          },
          {
            label: '# Bid',
            data: bidPrice,
            fill: false,
            backgroundColor: '#E5C394',
            borderColor: '#F4E0BC',
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            borderWidth: 2
          },
        ],
    }

    const options = {
        scales: {
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
    
    // console.log('max', maxbidList_x)

    return(
        <Div>
         <Line data={max_data_bids} options={options} />
        </Div>
    )
}