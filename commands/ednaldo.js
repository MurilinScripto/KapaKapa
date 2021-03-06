const jimp = require("jimp")

exports.run = async (client, message, args) => {

        let img = jimp.read("https://ectrywin.sirv.com/ednaldo.webp")
        if (!args[0]) return message.reply("Indique que o ednaldo deve falar.")
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                image.resize(675, 484)
                image.print(font, 120, 240, args.join(" "), 600)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({files: [{ attachment: i, name: "ednaldo.png"}]})
                })
            })
        })
    }