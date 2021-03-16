import { createAction, createReducer } from "@reduxjs/toolkit";
import { buildConnection, connectSuccess, connectFail} from './action'
import { Binance } from "../Type"

const initialState = {
    status: false,
    list: [] as Binance[],
    errorMsg: ''
}

export const webReducer =  createReducer(initialState, {
    [buildConnection.type]: (state, action) => {
        console.log('start connection')
        return state;
    },

    [connectSuccess.type]: (state, action) => {
        // console.log("p", action.payload)
        state.status = true
        if (state.list.length <= 3) {
            state.list.push(action.payload)
        }
        else if (state.list.length > 3) {
            state.list.splice(0, 1);
            state.list.push(action.payload);
        }
        
        // console.log('len', state.list.length, state.list[0].U)
        return state;
    },

    [connectFail.type]: (state, action) => {
        state.errorMsg = action.payload;
        state.status = false;
        return state;
    },

})