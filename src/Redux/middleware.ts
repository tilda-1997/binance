import { AnyAction, Middleware } from "@reduxjs/toolkit";
import { buildConnection, connectSuccess, connectFail} from './action'

export const webMiddleware: Middleware = (store: any) => (next: any) => (action: AnyAction) => {
    const { type, payload } = action;
    const url = 'wss://stream.binance.com:9443/ws/bnbbtc@depth';

  
    next(action);

    if (type === buildConnection.toString()){
        try {
            const ws = new WebSocket(url)
            console.log('ws', ws);

            ws.onopen = () => {
                console.log("connected")
            }
            ws.onmessage = (e) => {
                var data = JSON.parse(e.data)
                store.dispatch(connectSuccess(data))
                // console.log('onmessg', data, data['a'])
            }
            ws.onerror = (event) => {
                console.log('error', event)
                store.dispatch(connectFail(event))
            }
            // if (ws.readyState == 0) {
            //     console.log('loading')
            // }
            
        } catch (error) {

            console.log('error', error)
        }
    }

}