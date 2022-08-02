import { DiscordCommand } from "../models/discordCommand"
import DiscordCommandComponent from "./discordCommandComponent"

const DiscordCommandList = (discordCommandList : Array<DiscordCommand>) => {

    return (
        discordCommandList.forEach(element => {
            <DiscordCommandComponent discordCommand={element} />
        })
    );
};