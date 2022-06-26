const { CommandInteraction } = require("discord.js");

/**
 * 
 * @param {*} client
 * @param {CommandInteraction} interaction
 * @returns
 */

module.exports = (client, interaction) => {
    try{
        if(!interaction.isCommand && !interaction.isContextMenu()) return;

        const command = client.commands.get(interaction.commandName), member = interaction.guild.members.cache.get(interaction.member.id);

        if (!command || (!command.dm && !interaction.guild)) return;
        
        if (command.permissions?.length > 0 && !(command.permissions.some(v => member.permissions.has(v)))) return interaction.reply({ content: `You don't have the required permissions to use this command, required permissions : ${command.permissions.join(", ")}`  })
        
        command.run(client, interaction);
    } catch (e) {
        console.log(e);
        interaction.reply({ content:"An error occured!" });
    }
}