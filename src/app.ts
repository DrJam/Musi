import { auth, client, input } from "./common/common"

input.on("line", (input: string) => {
    ServerCommands.process(input)
})

client.on("ready", () => {
    console.log(`${prefix.discord} Ready as ${client.user.username}`)
})

client.login(auth.token)
console.log(`${prefix.discord} Logged in`)

