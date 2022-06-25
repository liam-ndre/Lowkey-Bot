const rps = require('discord-rock-paper-scissor');
const game = new rps({
    readyMessage:"Ready to play rock paper scissors?",
    endTitle: "{winner}, winner winner, chicken dinner!",
    endDescription: "{winner} took the dub\n{looser} is the loser!",
});

module.exports = {
    data : {
        name : "rock-paper-scissors",
        description:"Play rock paper scissors with the bot",
        options: [{
            name: "user",
            description: "Mention the user you want to play with",
            required:false,
            type:6,
        }],
    },

    /**
     * 
     * @param {*} client 
     * @param {*} interaction 
     */
    run : async (client, interaction) => {
        interaction.reply({content:`Game has started`});
        const user = interaction.options.getUser("user");

        if(user && user.bot)return interaction.editReply({content:`You can't play with bots`});

        if(!user)game.solo(interaction,client)
        else game.duo(interaction,user);
    }
}