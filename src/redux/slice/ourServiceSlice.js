import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    inquiry: {},
    package: []
}

const ourServiceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setInquiry: (state, action) => {
            state.inquiry = action.payload
        },
        setPackage: (state, action) => {
            state.package = action.payload
        },
        clearService: (state, action) => {
            state.inquiry = {}
        },
    }
})

export const { setInquiry, setPackage, clearInquiry } = ourServiceSlice.actions

export default ourServiceSlice.reducer