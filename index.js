const discord=require("discord.js")

const client=new discord.Client({partials:["REACTION","MESSAGE"]})

client.on("messageReactionAdd",async function(msg,user){
    if(msg.partial==true){
        try{
            await msg.fetch()
            await user.fetch()
        }catch(e){
            console.error(e)
            return
        }
    }

    if(msg.emoji.name == "❤️"){
        user.send("this is going a little fast for me. can we slow down?")
    }else if(msg.emoji.name=="👍"){
        user.send("EYyyyyyy")
        user.send("https://tenor.com/view/the-fonz-happy-days-thumbs-up-okay-approve-gif-12161874")
    }else{
        user.send("NO HJEARTS ORE LIKES?!??!")
    }

})

client.on("messageReactionRemove",async function(msg,user){
    if(msg.partial==true){
        try{
            await msg.fetch()
            await user.fetch()
        }catch(e){
            console.error(e)
            return
        }
    }

    user.send("im not giving you ANY EMOJIES EITHER!!")
})


client.on("ready",function(){
    console.log("im vibin")
})

client.login(process.env.TOKEN)