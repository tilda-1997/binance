import { useSelector } from "react-redux";
import { RootState } from "../Redux";
import { AiOutlineSmile, AiFillWarning,  AiOutlineFall, AiOutlineSchedule } from "react-icons/ai";
import styled from "styled-components";

const Pp = styled.p`
    color      : #DFDEE3;
    font-family: Optima;
    font-size  : 16px;
    font-weight: 700;
    display    : inline-block
`
const Div = styled.div`
    padding   : 0px 8px 0px 16px;
    text-align: center`

const Text = styled.p`
    color      : #B9CDE3;
    font-family: Optima;
    text-align : center
`
const Aa = styled.a`
    text-decoration: none;
    color: #E3E6DA
`

const StateIcon = () => {

    const status       = useSelector((state: RootState) => state.webReducer.status)
    const eventList    = useSelector((state: RootState) => state.webReducer.eventTime)
    const errorMessage = useSelector((state: RootState) => state.webReducer.errorMsg)
  
    
    return(
        <>
        <Div>
        {status? 
        (<> 
            <Pp> Connected! Websocket is working. &nbsp; </Pp>
            <AiOutlineSmile style = {{color:'#0fd850', width: '28px', height: '28px', display:'inline-block'}} />
         </>): 
         (<>
            <Pp> Disconnected! Please refresh the page &nbsp; </Pp>
            {/* {errorMessage!==null? <Text>{errorMessage}</Text> : null} */}
            <AiFillWarning style = {{color:'#ff9569', width: '28px', height: '28px' , display:'inline-block'}} />
         </>
         )}
        </Div>
       
        { eventList[60]? (<Text> <AiOutlineFall /> The data shows the real-time transactions of BinanceCoin BTC (BNB-BTC).
        Time event <AiOutlineSchedule />  From  {eventList[0]} to {eventList[60]}. <Aa href='https://github.com/tilda-1997/binance'> View on GitHub &rarr;</Aa> </Text>) : 
        ( <Text>  <AiOutlineFall /> The data shows the real-time transactions of BinanceCoin BTC (BNB-BTC). 
            <Aa href='https://github.com/tilda-1997/binance'> View on GitHub &rarr;</Aa> 
         </Text>)}
        </>
    )
}

export default StateIcon