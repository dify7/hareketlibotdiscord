
const db = require("croxydb")
const { PermissionsBitField, Message } = require("discord.js");
const {  EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const { execute } = require("../events/ready");
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("botavatar")
      .setDescription("Botunuzun gifini hareketli yapar")
      .addAttachmentOption(option => 
        option.setName('gif')
        .setDescription('Botunun olacak gifi ekle')
        .setRequired(true)),
        run: async (client, interaction) => {    
            const { options } = interaction;
    const avatar = options.getAttachment("gif")
    if (interaction.user.id !== "sizinİDniz") return interaction.reply({content: "Bu komutu sadece kurucum kullanabilir kardeşim."});


if (avatar.contentType !== "image/gif") interaction.reply('Gif kullanmalısın kardeşim.')
else {

 client.user.setAvatar(avatar.url)


 return interaction.reply('Başarıyla avatarım değişti.');
}
}
};