const {Telegraf} =require('telegraf');
const axios = require('axios');
/**
 * How to get the secret token for creating a bot?
 * -> Open Telegram and search for BotFather
 * -> To read instructions type /start and press Enter
 * -> To create a new bot type /newbot and press Enter
 * -> It will ask for a bot name , give a bot without a / ,ex:. coding_bot
 * -> then it will ask for a username ending with bot
 * -> t.me/coding_akg_bot
 * -> Use this token to access the HTTP API:
       5508858238:AAGAh6z6lD8SMYoumZoydk9P-SAE9PTWOOU
 *  
 * 
 */
const bfs_py=`# Implementation BFS traversal in python


from queue import Queue
ad_list={
    "A":["B","D"],
    "B":["A","C"],
    "C":["B"],
    "D":["A","E","F"],
    "E":["D","F","G"],
    "F":["D","E","H"],
    "G":["E","H"],
    "H":["G","F"]
}

# DFS CODE
visited={ }
level={}
parent={}
bfs_traversal_output=[]
queue=Queue()


for node in ad_list.keys():
    visited[node]=False
    parent[node]=None
    level[node]=-1
# print(visited)
# print(level)
# print(parent)

s="A"
visited[s]=True
level[s]=0
queue.put(s)
while not queue.empty():
    u=queue.get()
    bfs_traversal_output.append(u)
    for v in ad_list[u]:
        if not visited[v]:
            visited[v]=True
            parent[v]=u
            level[v]=level[u]+1
            queue.put(v)
print(bfs_traversal_output)
    
`;
const commands=`
/bfs_py -> for Implementation BFS traversal in python

/dfs_py -> for Implementation DFS traversal in python

/help -> Send me any stickers for cheering
`;

// const token_key=process.env.TELEGRAM_TOKEN;
const token_key="5508858238:AAGAh6z6lD8SMYoumZoydk9P-SAE9PTWOOU";
const bot = new Telegraf(token_key);

bot.start((ctx)=>ctx.reply("Welcome to the now coding bot made by Abhishek "));
bot.command('bfs_py',(ctx)=>ctx.reply(bfs_py));
bot.command('dfs_py',async function(ctx){
    const response =await axios.get('https://raw.githubusercontent.com/Abhigupta13/AI-Lab-IV-sem/master/DFS.py');
    return ctx.reply(response.data);
})

bot.command('commands',(ctx)=>ctx.reply(commands))
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker',(ctx)=>ctx.reply('❤️'));
bot.on('message',(ctx)=>ctx.reply("Oops !! try valid command"));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();
