"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const framework_1 = require("@sapphire/framework");
const client = new framework_1.SapphireClient({
    logger: {
        level: 20 /* LogLevel.Debug */
    },
    shards: 'auto',
    intents: []
});
client.login(process.env.BOT_TOKEN);
//# sourceMappingURL=index.js.map