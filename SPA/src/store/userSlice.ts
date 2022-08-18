import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models/user";

const initialUserState: User = {
    name: ''
};

export const UserSlice = createSlice({
    name: 'user',
    initialState: { 
        value: initialUserState
    },
    reducers: {
        updateUserName: (state, action) => {
            state.value.name = (action.payload as User).name
        }
    }
})

export default UserSlice.reducer