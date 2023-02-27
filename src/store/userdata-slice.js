import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'ABCD',
    bookmarks: [1, 3]
}

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        updateBookmarks(state, action) {
            let applicationIndex = state.bookmarks.findIndex(id => id === action.payload.id)
            if (applicationIndex === -1) {
                state.bookmarks.push(action.payload.id)
            }
            else {
                state.bookmarks.splice(applicationIndex, 1)
            }
        }
    }
})

export const userDataActions = userDataSlice.actions
export default userDataSlice