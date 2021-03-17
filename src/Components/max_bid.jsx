import { useSelector } from "react-redux";
import { Line } from '@reactchartjs/react-chart.js'
import styled from "styled-components";

const Div = styled.div`
  width: 680px;
  padding: 30px 80px 0px 60px;
`

export default function MaxBid () {

    const maxbidList_x = useSelector((state) => state.webReducer.bids_max_x)
    // const maxbidList_y = useSelector((state) => state.webReducer.bids_max_y)
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
          },
        ],
    }

    const options = {
        scales: {
          yAxes: [
            {
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