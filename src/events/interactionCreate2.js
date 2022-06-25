const reactionRole = require("../models/reactionRole");

module.exports = async (client, interaction) => {
    if (!interaction.isButton()  || !interaction.guild) return;

    const emoji = interaction?.component?.emoji;

    const menu = await reactionRole.findOne({ message: interaction.message.id });

    if (!menu || menu.roles.length === 0 || !menu.roles.some(v => v.emoji === emoji.id || v.emoji === emoji.name)) return;

    const member = interaction.guild.members.cache.get(interaction.user.id);

    menu.roles.forEach(v => {
        const role = interaction.guild.roles.cache.get(v.role);

        if ((v.emoji !== emoji.name && v.emoji !== emoji.id)) return;
    })
}