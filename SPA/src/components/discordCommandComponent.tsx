import DiscordCommand from "../models/discordCommand";

const DiscordCommandComponent = ({discordCommand}:{discordCommand:DiscordCommand} ) => {

    return (
        //todo look into this, There's likely some implicit conversion it will do but ts yells at me without converting to string
        <li id={discordCommand.id + ''}>
            {discordCommand.command}
        </li>
    )
}

export default DiscordCommandComponent;