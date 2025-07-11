import {configureStore} from "@reduxjs/toolkit"
import userReducer1 from "./components/userSlice"
export const store = configureStore({
    reducer : {
        user : userReducer1
    }
})