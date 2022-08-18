import { DiscordCommand } from "../models/discordCommand"
import DiscordCommandComponent from "./discordCommandComponent"

const DiscordCommandList = ({discordCommandList} : {discordCommandList : Array<DiscordCommand>}) => {

    return <>({
            discordCommandList.map(element => {
                <DiscordCommandComponent discordCommand={element} />
            })}
    );
    </>
};

export default DiscordCommandList;