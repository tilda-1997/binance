import { combineReducers } from '@reduxjs/toolkit'
import { webReducer } from './reducer'

export const rootReducer = combineReducers({
    webReducer: webReducer,
})

export type RootState = ReturnType<typeof rootReducer>