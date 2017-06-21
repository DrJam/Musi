import { Auth } from "../types/auth"
import { Client } from "discord.js"

export var auth: Auth = loadAuth()

export var client: Client = new Client({
    disableEveryone: true,
    disabledEvents: ["TYPING_START"]
})

function loadAuth() {
    var _auth = require("/config/auth.json")
    return <Auth>{
        token: _auth.token
    }
}