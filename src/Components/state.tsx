import { useSelector } from "react-redux";
import { RootState } from "../Redux";
import { AiOutlineSmile, AiFillWarning,  AiOutlineFall, AiOutlineSchedule } from "react-icons/ai";
import styled from "styled-components";

const Pp = styled.p`
    color: #F7FCFB;
    font-family: Optima;
    font-size: 18px;
    font-weight: 700;
    display: inline-block
`
const Div = styled.div`
    padding: 0px 8px 8px 16px;
    text-align: center`

const Text = styled.p`
    color: #465973;
    font-family: Optima;
    text-align: center
`

const StateIcon = () => {

    const status = useSelector((state: RootState) => state.webReducer.status)
    const eventList = useSelector((state: RootState) => state.webReducer.eventTime)
    const errorMessage = useSelector((state: RootState) => state.webReducer.errorMsg)
    const time = new Date(errorMessage[0])
    
    return(
        <>
        <Div>
        {status? 
        (<> 
            <AiOutlineSmile style= {{color:'#0fd850', width: '28px', height: '28px', display:'inline-block'}} />
            <Pp>&nbsp; Connected! Websocket is working.</Pp>
            <Pp>{time}</Pp>
         </>): 
         (<>
            <AiFillWarning style= {{color:'#ff9569', width: '28px', height: '28px' , display:'inline-block'}} />
            <Pp>&nbsp; Disconnected! Please refresh the page</Pp>
            {errorMessage!==null? <Text>{errorMessage}</Text> : null}
         </>
         )}
        </Div>
        <Text> The data shows the real-time transactions of BinanceCoin BTC (BNB-BTC). <AiOutlineFall /> &nbsp;
            The x-axis of the charts below refers to the price level, and the y-axis refers to the quantity.
        </Text>
        { eventList[9]? (<Text> 
        The time event <AiOutlineSchedule />  code of the displayed data is from {eventList[0]} to {eventList[9]}.</Text>) : null}
       
        </>
    )
}

export default StateIcon