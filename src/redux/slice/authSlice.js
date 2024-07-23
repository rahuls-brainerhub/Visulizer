import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    token:""
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setrefreshToken: (state, action) => {
            state.token = action.payload
        },
        clearAuth: (state, action) => {
            state.user = {}
            state.token = {}
        },
    }
})

export const { setUser, clearAuth, setrefreshToken } = authSlice.actions

export default authSlice.reducer