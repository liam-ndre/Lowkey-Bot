const { Interaction} = require("discord.js");

module.exports = {
    data : {
        name : "Greet",
        description:"",
        type:2,
    },

    /**
     * 
     * @param {*} client 
     * @param {*} interaction 
     */
    run : async (client, interaction) => {
        const member = interaction.guild.members.cache.get(interaction.targetId);
        
        member.user.send({content:`Hello from ${interaction.user.toString()}` }).then(v=>{
        interaction.reply({content:`Successfully greeted ${member.user.toString()}`, ephermeral: true});
        }).catch(e=>{
            interaction.reply({content:`Unable to greet ${member.user.toString()}`, ephermeral: true});
        })
    }
}