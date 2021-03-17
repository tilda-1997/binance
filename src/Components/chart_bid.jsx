import { useSelector } from "react-redux";
import { Line } from '@reactchartjs/react-chart.js'
import styled from "styled-components";

const Div = styled.div`
  width: 660px;
  padding: 10px 80px;
`

export default function BidChart () {

    const bidList_x = useSelector((state) => state.webReducer.bids_x)
    const bidList_y = useSelector((state) => state.webReducer.bids_y)

    const data_bids = {
        labels: bidList_x,
        datasets: [
          {
            label: '# Bids to be updated',
            data: bidList_y,
            fill: false,
            backgroundColor: '#8BB6C4',
            borderColor: '#B3DBE1',
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
         <Line data={data_bids} options={options} />
        </Div>
    )
}