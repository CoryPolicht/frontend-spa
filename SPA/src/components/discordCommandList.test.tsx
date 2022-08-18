import {render, screen } from '@testing-library/react'
import DiscordCommand from '../models/discordCommand';
import DiscordCommandList from './discordCommandList'


test('renders discord command list component', () => {
    const discordCommand: DiscordCommand = {
        id: 1,
        command: 'example command'
    }
    const discordCommands: DiscordCommand[] = [discordCommand]
    render(<DiscordCommandList discordCommandList={discordCommands}/>);
    
  });