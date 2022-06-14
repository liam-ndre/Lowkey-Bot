module.exports = (client) => {
    console.log("Client is up");

    client.application.commands.set([...client.commands.map(v => v.data)], "205416639024332800")
}