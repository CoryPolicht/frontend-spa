import { DiscordCommand } from "../models/discordCommand";
import DiscordCommandList from "../components/discordCommandList";

const Dashboard = () => {
    let discordCommandList:DiscordCommand[] = []
    return (
        <DiscordCommandList discordCommandList={discordCommandList}/>
    );
};

export default Dashboard;