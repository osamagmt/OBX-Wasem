const Discord = require('discord.js');
const client = new Discord.Client();
const prefixac = "";
client.on('message', message => {
 let rebel = message.content.split(` `).slice(1).join(' ');
if(message.author.id !== "397737293059981315") return ;
if (message.content.startsWith(prefixac + 'ply')) {
if(!rebel) return message.channel.send(`**ex ? ${prefixac}setp Hi**`).then(m => m.delete(3000));
client.user.setActivity(rebel,{ type: 'PLAYING' });
message.channel.send("**تـــ تغيير الحالة ــم**");} 
if (message.content.startsWith(prefixac + 'ls')) {
if(!rebel) return message.channel.send(`**ex ? ${prefixac}setl Hi**`).then(m => m.delete(3000));
client.user.setActivity(rebel, { type: 'LISTENING' });
message.channel.send("**تـــ تغيير الحالة ــم**");}
if (message.content.startsWith(prefixac + 'st')) {
if(!rebel) return message.channel.send(`**ex ? ${prefixac}sets Hi**`).then(m => m.delete(3000));
client.user.setActivity(rebel, { type: 'STREAMING', url:'https://twitch.tv/osamagmt' });
message.channel.send("**تـــ تغيير الحالة ــم**");}     
if (message.content.startsWith(prefixac + 'wt')) {
if(!rebel) return message.channel.send(`**ex ? ${prefixac}setw Hi**`).then(m => m.delete(3000));
client.user.setActivity(rebel, { type: 'WATCHING' });
message.channel.send("**تـــ تغيير الحالة ــم**");}
if (message.content.startsWith(prefixac + 'embed')) {
message.delete();
if(!rebel) return message.channel.send(`**ex ? ${prefixac}embed Hi everyone**`).then(m => m.delete(3000));
const embed = new Discord.RichEmbed()
.setColor("RANDOM").setDescription(rebel);
message.channel.send(embed)}
if (message.content.startsWith(prefixac + 'avatar')) {
var rebel2 = message.mentions.users.first() || message.author;
const embed = new Discord.RichEmbed().setColor("RANDOM").setImage(`${rebel2.avatarURL}`);
message.channel.send(embed);}
if (message.content === `${prefixac}help`) {
message.delete();
const embed = new Discord.RichEmbed().setColor("RANDOM").setDescription(`**
${prefixac}ply ⇏ لتغيير حالتك إلى \`PLAYING\`
ex ? ${prefixac}setp Hi
${prefixac}ls ⇏ لتغيير حالتك إلى \`LISTENING\`
ex ? ${prefixac}setl Hi
${prefixac}st ⇏ لتغيير حالتك إلى \`STREAMING\`
ex ? ${prefixac}sets Hi
${prefixac}wt ⇏ لتغيير حالتك إلى \`WATCHING\`
ex ? ${prefixac}setw Hi
${prefixac}embed ⇏ لتكرار كلامك بأمبيد
ex ? ${prefixac}embed Hi everyone
**`);
message.channel.sendEmbed(embed).then(m => m.delete(17000));}
});

client.login(process.env.BOT_TOKEN);
