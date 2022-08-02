import DiscordCommand from "./discordCommand"

const DiscordCommandList = (discordCommandList : Array<any>) => {

    return (
        discordCommandList.forEach(element => {
            <DiscordCommand props={element} />
        })
    );
};