import { useSelector } from "react-redux";
import { Line } from '@reactchartjs/react-chart.js'
import styled from "styled-components";

const Div = styled.div`
  width  : 700px;
  padding: 30px 30px 30px 10px;
`

export default function LowAskBid () {

    const bidLow    = useSelector((state) => state.webReducer.bidPrice_min)
    const askLow    = useSelector((state) => state.webReducer.askPrice_min)
    const eventList = useSelector((state) => state.webReducer.eventTime)

    const maxs = {
        labels  : eventList,
        datasets: [
          {
            label           : '# Lowest Ask Price',
            data            : askLow,
            fill            : false,
            borderColor     : '#96C4D8',
            backgroundColor : '#B2D0EB',
            pointRadius     : 5,
            pointHoverRadius: 15,
            showLine        : false                  // no line shown
          },
          {
            label           : '# Lowest Bid Price',
            data            : bidLow,
            fill            : false,
            borderColor     : '#DF6C7E',
            pointRadius     : 0,
            backgroundColor : '#FBB1B5',
            pointRadius     : 5,
            pointHoverRadius: 15,
            showLine        : false                  // no line shown
          },
        ],
    }

    const options = {
        title: {
            display: true,
            text   : 'See the lowest price here'
          },
      elements: {
        point: {
          pointStyle: 'triangle',
        }
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
    
    // console.log('max', maxbidList_x)

    return(
        <Div>
         <Line data = {maxs} options = {options} />
        </Div>
    )
}