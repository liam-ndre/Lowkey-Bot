module.exports = {
    data : {
        name : "status",
        description:"Change the status of your client",
        options: [{
            name:"status",
            description: "the new status of your client!",
            required:true,
            type:"STRING",
        }],
    },

    /**
     * 
     * @param {*} client 
     * @param {*} interaction 
     */
    run : async (client, interaction) => {
        if(!client.owners.includes(interaction.user.id)) return interaction.reply({content:"You are not the owner of this bot!"});
        client.user.setActivity({
            name:interaction.options.getString("status", true),
            type:"PLAYING",
        });

        interaction.reply({content: `Status changed to  : ${interaction.options.getString("status")}` });
    }
}