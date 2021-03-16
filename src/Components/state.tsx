import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux";
import { AiOutlineFrown, AiOutlineSmile } from "react-icons/ai";
import styled from "styled-components";

const Pp = styled.h2`
    color: #F7FCFB;
    font-family: Optima;
    font-weight: 700;
    display: inline-block
`
const Div = styled.div`
    padding: 4px 16px`

const StateIcon = () => {

    const status = useSelector((state: RootState) => state.webReducer.status)

    return(
        <Div>
        {status? 
        (<> 
            <AiOutlineSmile style= {{color:'#0fd850', width: '28px', height: '28px', display:'inline-block'}} />
            <Pp>&nbsp; Connected!</Pp>
         </>): 
         (<>
            <AiOutlineFrown style= {{color:'#ff9569', width: '28px', height: '28px' , display:'inline-block'}} />
            <Pp>&nbsp; Disconnected! Please refresh the page</Pp>
         </>
         )}
       
        </Div>
    )
}

export default StateIcon