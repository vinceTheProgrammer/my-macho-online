"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingCommand = void 0;
const framework_1 = require("@sapphire/framework");
const snowflake_1 = require("@sapphire/snowflake");
class PingCommand extends framework_1.Command {
    constructor(context, options) {
        super(context, { ...options, name: 'ping', description: 'Ping bot to see if it is alive' });
    }
    async chatInputRun(interaction) {
        const msg = await interaction.reply({ content: `Ping?`, ephemeral: true, fetchReply: true });
        const { diff, ping } = this.getPing(msg, interaction);
        return interaction.editReply(`Pong 🏓! (Roundtrip took: ${diff}ms. Heartbeat: ${ping}ms.)`);
    }
    getPing(message, interaction) {
        const msgTimestamp = snowflake_1.DiscordSnowflake.timestampFrom(message.id);
        const diff = msgTimestamp - interaction.createdTimestamp;
        const ping = Math.round(this.container.client.ws.ping);
        return { diff, ping };
    }
    registerApplicationCommands(registry) {
        registry.registerChatInputCommand((builder) => builder.setName(this.name).setDescription(this.description));
    }
}
exports.PingCommand = PingCommand;
//# sourceMappingURL=ping.js.map