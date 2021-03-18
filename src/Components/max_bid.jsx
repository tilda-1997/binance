import { useSelector } from "react-redux";
import { Line } from '@reactchartjs/react-chart.js'
import styled from "styled-components";

const Div = styled.div`
  width: 680px;
  padding: 30px 80px 0px 60px;
`

export default function MaxBid () {

    const maxbidList_x = useSelector((state) => state.webReducer.bids_max_x)
    const eventList = useSelector((state) => state.webReducer.eventTime)

    const max_data_bids = {
        labels: eventList,
        datasets: [
          {
            label: '# Bids with best price',
            data: maxbidList_x,
            fill: false,
            backgroundColor: '#465973',
            borderColor: '#8BB6C4',
            type: 'line',
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