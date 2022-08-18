import {createSlice} from '@reduxjs/toolkit';
import { DiscordCommand } from '../models/discordCommand';

const initialState: DiscordCommand[] = []

export const DiscordCommandSlice = createSlice({
    name: 'discordCommands',
    initialState: {
        value: initialState,
    },
    reducers: {
        updateCommands: (state, action ) => {
            state.value.push(action.payload);
        }
    }
})

export default DiscordCommandSlice.reducer;