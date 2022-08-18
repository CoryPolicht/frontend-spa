import { render } from '@testing-library/react';
import DiscordCommand from '../models/discordCommand'
import DiscordCommandComponent from './discordCommandComponent'

test('renders discord command component', () => {
    const discordCommand: DiscordCommand = {
        id: 1,
        command: 'example command'
    }

    render(<DiscordCommandComponent discordCommand={discordCommand} />)

  });