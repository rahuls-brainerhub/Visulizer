import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   fqa:[]
}

const contactSlice = createSlice({
    name: 'f',
    initialState,
    reducers: {
        setContact: (state, action) => {
            state.contact = action.payload
        },
        clearContact: (state, action) => {
            state.inquiry = {}
        },
    }
})

export const { setContact,clearContact } = contactSlice.actions

export default contactSlice.reducer