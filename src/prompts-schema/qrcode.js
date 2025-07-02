import chalk from "chalk"

export const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Type the link to generate the QR CODE"),
    }, 
    {
        name: "type",
        description: chalk.yellow("Choose the QRcode type (1- NORMAL or (2- Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Choose only 1 or 2"),
        required: true
    }
]