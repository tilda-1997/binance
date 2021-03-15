import { AnyAction, Middleware } from "@reduxjs/toolkit";

export const webMiddleware: Middleware = (store:any) => (next: any) => (action: AnyAction) => {
    const { type, payload } = action;
    // const tokenForAuth = localStorage.getItem("token")
  
    next(action);
}