const { MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
    data: {
        name: "button",
        description: "Get some buttons!",
        options: [],
    },

    run: async (client, interaction) => {
        const row = new MessageActionRow().addComponents(
            new MessageButton().setStyle("LINK").setURL("https://google.com").setEmoji("🔍"),
        );

        interaction.reply({ components: [row], content:"Buttons!" });
    }
}
