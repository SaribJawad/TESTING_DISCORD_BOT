require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

// Combine all intents into a single array
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`✨ ${c.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content === "hello") {
    message.reply("hell");
  }
});

client.login(process.env.TOKEN);
