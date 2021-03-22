import { useSelector } from "react-redux";
import { Line } from '@reactchartjs/react-chart.js'
import styled from "styled-components";

const Div = styled.div`
  width: 700px;
  padding: 30px 30px 30px 60px;
`

export default function HighAskBid () {

    const bidHigh = useSelector((state) => state.webReducer.bidPrice_max)
    const askHigh =  useSelector((state) => state.webReducer.askPrice_max)
    const eventList = useSelector((state) => state.webReducer.eventTime)

    const maxs = {
        labels: eventList,
        datasets: [
          {
            label: '# Best Ask Price',
            data: askHigh,
            fill: false,
            borderColor: '#CFAFE2',
            backgroundColor: '#CFAFE2',
						pointRadius: 5,
						pointHoverRadius: 15,
						showLine: false // no line shown
          },
          {
            label: '# Best Bid Price',
            data: bidHigh,
            fill: false,
            borderColor: '#FDE0A2',
            pointRadius: 0,
            backgroundColor: '#FDE0A2',
						pointRadius: 5,
						pointHoverRadius: 15,
						showLine: false // no line shown
          },
        ],
    }

    const options = {
      title: {
        display: true,
        text: 'See the best prices here',
      },
      elements: {
        point: {
          pointStyle: 'rectRot',
        }
      },
        scales: {
            tooltips: {
                enabled: false,
                mode: 'index',
                position: 'average',
            },
            hover: {
                mode: 'index',
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
              display: true,
              labelString: 'price (x0.001)',
              color: '#F7F8F6'
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
         <Line data={maxs} options={options} />
        </Div>
    )
}