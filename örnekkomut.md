const db = require("croxydb")
const { PermissionsBitField } = require("discord.js");
const { Client, EmbedBuilder, SlashCommandBuilder } = require("discord.js");
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("karaliste-ekle") //komut adı
      .setDescription("Sunucuyu Karalisteye Eklersin (SAHİP ÖZEL)") //komut açıklaması
run: async(client, interaction,args,data) => {
    if (interaction.user.id !== '909225608976949338') return interaction.reply('Sen benim sahibim olan Krom değilsin!')
    const sunucuid = interaction.options.getString('sunucuid')
    db.set (`karaliste_${sunucuid}`, true)
 const ayarlandı = new EmbedBuilder()
 .setColor("#f8ac1d")
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
.setDescription("**✅ Sunucu Karalisteye Alındı!**")
.addFields({ name: 'Karalisteye Alınan Sunucu İDsi:', value: `${sunucuid}`, inline: true })

 interaction.reply({embeds: [ayarlandı], allowedMentions: { repliedUser: false }})

}
};