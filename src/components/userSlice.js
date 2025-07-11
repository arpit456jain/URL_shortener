import {createSlice} from '@reduxjs/toolkit' 

const initialState = {
    name: "",
    email: "",
    isLoggedIn: false,
}
export const userSlice = createSlice({
    name : 'myuser',
    initialState,
    reducers : {
        setUser : (state,action)=>{
            state.name = action.payload.name
            state.isLoggedIn = true
        },
        removeUser : (state,action)=>{
           state.isLoggedIn = false
        }

    }
})   

export default userSlice.reducer
export const {setUser,removeUser} = userSlice.actions