import { Command, type ChatInputCommand } from '@sapphire/framework';
import type { APIMessage } from 'discord-api-types/v9';
import type { Message } from 'discord.js';
export declare class PingCommand extends Command {
    constructor(context: Command.Context, options: Command.Options);
    chatInputRun(interaction: ChatInputCommand.Interaction): Promise<APIMessage | Message<boolean>>;
    private getPing;
    registerApplicationCommands(registry: ChatInputCommand.Registry): void;
}
//# sourceMappingURL=ping.d.ts.map