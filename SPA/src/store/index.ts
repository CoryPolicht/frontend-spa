import { configureStore } from "@reduxjs/toolkit";
import DiscordCommandSlice from "./discordCommandSlice";
import UserSlice from "./userSlice";

export default configureStore({
    reducer: {
        DiscordCommandSlice,
        UserSlice
    }
})