import { createAction } from "@reduxjs/toolkit";
import { Binance } from "../Type"

export const buildConnection = createAction('buildConnection')
export const connectSuccess  = createAction<Binance>('connectSuccess')
export const connectFail     = createAction<{}>('connectAction')