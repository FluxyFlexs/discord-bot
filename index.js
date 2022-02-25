var Discord = require("discord.js");
var Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

Client.on("ready", () => {
    console.log("✅")
});

Client.on("guildMemberAdd", member => {
    Client.channels.cache.get("946113920136007763").send(member.displayName + "a rejoin le serveur.");
    member.roles.add("946862916244758608");
})

Client.login(process.env.TOKEN)