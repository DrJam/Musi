import { auth, client } from "./common/common"


client.on("ready", () => {
    console.log(`Ready as ${client.user.username}`)
})

client.login(auth.token)
console.log(`Logged in`)

