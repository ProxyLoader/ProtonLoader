const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

  if(message.channel.name == "🌍｜proxy"){

var exec = require('child_process').exec



exec('pkill java', (error, stdout, stderr) => {
});
    const embed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('ProtonHub > REQUEST ACCEPTED')
      .setDescription('Stopping attack...')
      .addField('STOPPING', "That attack its currently stoped!")  
      .setImage('https://upload.wikimedia.org/wikipedia/commons/d/dc/Blinking_stop_sign.gif')
      .setFooter('> Bot attacks')
        message.channel.send(embed)
}


  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['stop'],
  permLevel: 0
}

exports.help = {
  name: 'stop',
  description: 'BigPayload',
  usage: 'stop'
}
