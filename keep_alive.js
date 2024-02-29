const Discord = require('discord.js'); //import client from discord
const keep_alive = require('./keep_alive.js')
const client = new Discord.Client();

server.all("/", (req, res) => {
  res.send("Bot is running!")
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is ready.")
  })
}

module.exports = keepAlive
