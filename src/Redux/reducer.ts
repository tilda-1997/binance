import { createReducer } from "@reduxjs/toolkit";
import { buildConnection, connectSuccess, connectFail} from './action'
import { Binance } from "../Type"

const initialState = {
    status: false,
    list: [] as Binance[], // origin data

    asks: [] as number[][], //'a'
    asks_x: [] as number[], // x-price
    // asks_y: [] as number[], // y-quantity

    askPrice_max: [] as number[],
    askPrice_min: [] as number[],

    bids: [] as number[][], //'b'
    bids_x: [] as number[], // bid-x
    bids_y: [] as number[], // bid-y

    bids_max_x: [] as number[],
    bids_max_y: [] as number[],

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

        // for (let i = 0; i < p['a'].length; i++){
        //     var ask = p['a'][i]
        //     if (ask[1] > 0){
        //         valid_ask.push(ask)
        //         valid_ask_price.push(ask[0]) // a-x
        //         valid_ask_quantity.push(ask[1]) // a-y
        //     }
        // }

        let valid_bid = []
        let valid_bid_price = []
        let valid_bid_quantity = []

        var bid_bestPrice_x_value = 0

        let all_ask: number[][] = p['a']
        let valid_ask = all_ask.filter( a => a[1] > 0) // filter the asks with 0 quantity
        let valid_ask_price = [] 
        for (let i = 0; i < valid_ask.length; i++) {
            valid_ask_price.push(valid_ask[i][0]) // get all valid prices with asks
        }
        let max_ask_price = Math.max(...valid_ask_price)
        let min_ask_price = Math.min(...valid_ask_price)

        // console.log('max min', max_ask_price, min_ask_price)
      
        // needs change
        for (let i = 0; i < p['b'].length; i++){
            var bid = p['b'][i]
            var max_bid_price = 0
            var bid_bestPrice_x = 0

            if (bid[1] > 0){
                valid_bid.push(bid)
                valid_bid_price.push(bid[0]) // b-x
                valid_bid_quantity.push(bid[1]) // b-y

                if (bid[0] > max_bid_price){
                    max_bid_price = bid[0]
                    bid_bestPrice_x = bid[0]// get highest price of bid
                }
            }
            bid_bestPrice_x_value = bid_bestPrice_x
        }

        if (state.list.length <= 20) {
            state.list.push(action.payload)
            state.asks.push(valid_ask[0])
            state.bids.push(valid_bid[0])

            state.eventTime.push(date) 

            state.askPrice_max.push(max_ask_price)
            state.askPrice_min.push(min_ask_price)

            // state.asks_x.push(valid_ask_price[0]) // a-x
            // state.asks_y.push(valid_ask_quantity[0]) // a-y
            state.bids_x.push(valid_bid_price[0]) // b-x
            state.bids_y.push(valid_bid_quantity[0]) // b-y

            state.bids_max_x.push(bid_bestPrice_x_value) // max
        }
        else if (state.list.length > 20) {
            state.list.splice(0, 1);
            state.list.push(action.payload);

            state.asks.splice(0,1);
            state.asks.push(valid_ask[0])

            state.bids.splice(0,1);
            state.bids.push(valid_bid[0])

            state.eventTime.splice(0,1);  
            state.eventTime.push(date) 

            state.askPrice_max.splice(0,1);
            state.askPrice_max.push(max_ask_price);

            state.askPrice_min.splice(0,1);
            state.askPrice_min.push(min_ask_price);

            // state.asks_x.splice(0,1)
            // state.asks_x.push(valid_ask_price[0]) // a-x

            // state.asks_y.splice(0,1)
            // state.asks_y.push(valid_ask_quantity[0]) // a-y

            state.bids_x.splice(0,1)
            state.bids_x.push(valid_bid_price[0]) // b-x

            state.bids_y.splice(0,1)
            state.bids_y.push(valid_bid_quantity[0]) // b-y

           
            state.bids_max_x.splice(0,1);
            state.bids_max_x.push(bid_bestPrice_x_value)
            

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