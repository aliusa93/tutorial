const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')


client.on('ready', () => {
    console.log('Bot is ready.')
})







client.on('message', message => {
    console.log(message.content)
})














client.login(config.token)