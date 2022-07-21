const { createCanvas, loadImage } = require('canvas');
const { MessageAttachment } = require('discord.js');

module.exports = {
    data: {
        name: "canvas",
        description: "Create a canvas",
        options: [],
    },
    run: async (client, interaction) => {
        const canvas = createCanvas(1200, 700);
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "black";

        ctx.strokeText("Stroked text", 600, 450, 80);
        
        ctx.textAlign = "center";	
        ctx.fillText("Filled text", 600, 400);

        const image = new MessageAttachment(canvas.toBuffer(), "image.png");
        interaction.reply({ files: [image] });
    }
}