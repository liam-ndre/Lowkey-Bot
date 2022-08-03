const Discord = require('discord.js');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const { readdirSync } = require('fs');
const { join } = require('path');

dotenv.config();


// Connecting to mongoose
mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });

// Creating the client instance
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGE_REACTIONS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
    partials: ["REACTION", "MESSAGE"]
});

client.commands = new Discord.Collection();
client.categories = readdirSync(join(__dirname,"./commands"));
client.owners = ["196704710072205313"];

// Event handler
readdirSync(join(__dirname, "./events")).forEach(file => {
    client.on(file.split(".")[0], (...args) => require(`./events/${file}`)(client, ...args));
});

// Command Handler
for (let i=0;i<client.categories.length;i++) {
    const commands = readdirSync(join(__dirname, `./commands/${client.categories[i]}`)).filter(file => file.endsWith(".js"));

    for( let j=0;j<commands.length;j++) {
        const command = require(`./commands/${client.categories[i]}/${commands[j]}`);

        if(!command || !command?.data?.name || typeof(command?.run) !== "function") continue;

        client.commands.set(command.data.name, command);
    }
}

client.login(process.env.TOKEN);