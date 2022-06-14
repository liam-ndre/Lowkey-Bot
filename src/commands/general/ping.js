module.exports = {
    data : {
        name : "ping",
        description:"Get this bot's ping!",
        options: [],
    },

    /**
     * 
     * @param {*} client 
     * @param {*} interaction 
     */
    run : async (client, interaction) => {
        interaction.reply({content:`The ping of the client is ${client.ws.ping}`})
    }
}