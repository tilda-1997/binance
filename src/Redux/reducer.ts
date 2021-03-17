import { createReducer } from "@reduxjs/toolkit";
import { buildConnection, connectSuccess, connectFail} from './action'
import { Binance } from "../Type"

const initialState = {
    status: false,
    list: [] as Binance[], // origin data

    asks: [] as number[][], //'a'
    asks_x: [] as number[], // x-price
    asks_y: [] as number[], // y-quantity

    bids: [] as number[][], //'b'
    bids_x: [] as number[], // bid-x
    bids_y: [] as number[], // bid-y

    eventTime: [] as string[], 
    errorMsg: ''
}

export const webReducer =  createReducer(initialState, {
    [buildConnection.type]: (state, action) => {
        console.log('start connection')
        return state;
    },

    [connectSuccess.type]: (state, action) => {
        state.status = true
        var p = action.payload

        var valid_ask = []
        var valid_ask_price = [] // a-x
        var valid_ask_quantity = [] // a-y

        var valid_bid = []
        var valid_bid_price = []
        var valid_bid_quantity = []

        for (let i = 0; i < p['a'].length; i++){
            var ask = p['a'][i]
            if (ask[1] > 0){
                valid_ask.push(ask)
                valid_ask_price.push(ask[0]) // a-x
                valid_ask_quantity.push(ask[1]) // a-y
            }
        }

        for (let i = 0; i < p['b'].length; i++){
            var bid = p['b'][i]
            if (bid[1] > 0){
                valid_bid.push(bid)
                valid_bid_price.push(bid[0]) // b-x
                valid_bid_quantity.push(bid[1]) // b-y
            }
        }

        // console.log(valid_ask)

        if (state.list.length <= 5) {
            state.list.push(action.payload)
            state.asks.push(valid_ask[0])
            state.bids.push(valid_bid[0])
            state.eventTime.push((p['E']).toString()) 
            state.asks_x.push(valid_bid_price[0]) // a-x
            state.asks_y.push(valid_bid_quantity[0]) // a-y
            state.bids_x.push(valid_bid_price[0]) // b-x
            state.bids_y.push(valid_bid_quantity[0]) // b-y
        }
        else if (state.list.length > 5) {
            state.list.splice(0, 1);
            state.list.push(action.payload);

            state.asks.splice(0,1);
            state.asks.push(valid_ask[0])

            state.bids.splice(0,1);
            state.bids.push(valid_bid[0])

            state.eventTime.splice(0,1);
            state.eventTime.push((p['E']).toString()) 

            state.asks_x.splice(0,1)
            state.asks_x.push(valid_ask_price[0]) // a-x

            state.asks_y.splice(0,1)
            state.asks_y.push(valid_ask_quantity[0]) // a-y

            state.bids_x.splice(0,1)
            state.bids_x.push(valid_bid_price[0]) // b-x

            state.bids_y.splice(0,1)
            state.bids_y.push(valid_bid_quantity[0]) // b-y
        }

        // console.log('len', state.bids_x[0])
        return state;
    },

    [connectFail.type]: (state, action) => {
        state.errorMsg = action.payload;
        state.status = false;
        return state;
    },

})