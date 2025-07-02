import chalk from "chalk"

export const promptSchemaSetup = [ 
    {
        name: "select",
        description: chalk.yellow.bold("Choose a tool (1- QRCODE or (2- PASSWORD"),
        pattern: /[1-2]+$/,
        message: chalk.red.italic("Choose only 1 or 2"),
        required: true
    }
]