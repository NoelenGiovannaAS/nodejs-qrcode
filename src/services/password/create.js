import chalk from "chalk"
import { handlePassword } from "./handlePassword.js"

export async function createPassword(){
    const password = await handlePassword();
    console.log(chalk.green("Password created successfully:\n"))
    console.log(chalk.blue(password))
}