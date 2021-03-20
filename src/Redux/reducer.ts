import { createReducer } from "@reduxjs/toolkit";
import { buildConnection, connectSuccess, connectFail} from './action'
import { Binance } from "../Type"

const initialState = {
    status: false,
    list: [] as Binance[], // origin data

    asks: [] as number[][], //'a'
    askPrice_max: [] as number[],
    askPrice_min: [] as number[],

    bids: [] as number[][], //'b'
    bidPrice_max: [] as number[],
    bidPrice_min: [] as number[],

    eventTime: [] as string[], 
    errorMsg: ''
}

export const webReducer =  createReducer(initialState, {
    [buildConnection.type]: (state) => {
        console.log('start connection')
        return state;
    },

    [connectSuccess.type]: (state, action) => {
        state.status = true
        let p = action.payload
        // let date = new Date(p['E']).toLocaleString('en-US')
        let date = new Date(p['E']).toLocaleTimeString('en-US')

        // Ask
        let all_ask: number[][] = p['a']
        let valid_ask = all_ask.filter( a => a[1] > 0) // filter the asks with 0 quantity
        let valid_ask_price = [] 
        for (let i = 0; i < valid_ask.length; i++) {
            valid_ask_price.push(valid_ask[i][0]) // get all valid prices with asks
        }
        let max_ask_price = Math.max(...valid_ask_price)
        let min_ask_price = Math.min(...valid_ask_price)

        // Bid
        let all_bid: number[][] = p['b']
        let valid_bid = all_bid.filter( b => b[1] > 0) // filter the bids with 0 quantity
        let valid_bid_price = [] 
        for (let i = 0; i < valid_bid.length; i++) {
            valid_bid_price.push(valid_bid[i][0]) // get all valid prices with bids
        }
        let max_bid_price = Math.max(...valid_bid_price)
        let min_bid_price = Math.min(...valid_bid_price)

        if (state.list.length <= 60) {
            state.list.push(action.payload)
            state.asks.push(valid_ask[0])
            state.bids.push(valid_bid[0])

            state.eventTime.push(date) 

            state.askPrice_max.push(max_ask_price*1000)
            state.askPrice_min.push(min_ask_price*1000)

            state.bidPrice_max.push(max_bid_price*1000)
            state.bidPrice_min.push(min_bid_price*1000)
        }

        else if (state.list.length > 60) {
            state.list.splice(0, 1);
            state.list.push(action.payload);

            state.asks.splice(0,1);
            state.asks.push(valid_ask[0])

            state.bids.splice(0,1);
            state.bids.push(valid_bid[0])

            state.eventTime.splice(0,1);  
            state.eventTime.push(date) 

            state.askPrice_max.splice(0,1);
            state.askPrice_max.push(max_ask_price*1000);

            state.askPrice_min.splice(0,1);
            state.askPrice_min.push(min_ask_price*1000);

            state.bidPrice_max.splice(0,1)
            state.bidPrice_max.push(max_bid_price*1000)

            state.bidPrice_min.splice(0,1)
            state.bidPrice_min.push(min_bid_price*1000)

        }
        return state;
    },

    [connectFail.type]: (state, action) => {
        state.errorMsg = action.payload;
        state.status = false;
        return state;
    },

})