import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux";
import { ChartProps } from '../Type'

export default function Chart () {

    const bidList = useSelector((state: RootState) => state.webReducer.list)

    // console.log('app', bidList)

    return(
        <>
        
        </>
    )
}