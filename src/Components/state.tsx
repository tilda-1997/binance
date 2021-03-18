import { useSelector } from "react-redux";
import { RootState } from "../Redux";
import { AiOutlineSmile, AiFillWarning,  AiOutlineFall, AiOutlineSchedule } from "react-icons/ai";
import styled from "styled-components";

const Pp = styled.p`
    color: #DFDEE3;
    font-family: Optima;
    font-size: 16px;
    font-weight: 700;
    display: inline-block
`
const Div = styled.div`
    padding: 0px 8px 8px 16px;
    text-align: center`

const Text = styled.p`
    color: #B9CDE3;
    font-family: Optima;
    text-align: center
`

const StateIcon = () => {

    const status = useSelector((state: RootState) => state.webReducer.status)
    const eventList = useSelector((state: RootState) => state.webReducer.eventTime)
    const errorMessage = useSelector((state: RootState) => state.webReducer.errorMsg)
  
    
    return(
        <>
        <Div>
        {status? 
        (<> 
            <Pp> Connected! Websocket is working. &nbsp; </Pp>
            <AiOutlineSmile style= {{color:'#0fd850', width: '28px', height: '28px', display:'inline-block'}} />
         </>): 
         (<>
            <Pp> Disconnected! Please refresh the page &nbsp; </Pp>
            {/* {errorMessage!==null? <Text>{errorMessage}</Text> : null} */}
            <AiFillWarning style= {{color:'#ff9569', width: '28px', height: '28px' , display:'inline-block'}} />
         </>
         )}
        </Div>
        <Text>  <AiOutlineFall /> The data shows the real-time transactions of BinanceCoin BTC (BNB-BTC).  </Text>
        { eventList[7]? (<Text> 
        Time event <AiOutlineSchedule />  From  {eventList[0]} to {eventList[7]} </Text>) : null}
       
        </>
    )
}

export default StateIcon