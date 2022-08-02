import { DiscordCommand } from "../models/discordCommand";

const DiscordCommandComponent = ({discordCommand}:{discordCommand:DiscordCommand} ) => {

    return (
        <li>
            {discordCommand.command}
        </li>
    )
}

export default DiscordCommandComponent;