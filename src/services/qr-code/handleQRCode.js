import qr from "qrcode-terminal"
import chalk from "chalk"

export async function handleQRCode(err, result){
    if (err) {
        console.log("error on application");
        return;
    }

    const isSmall = result.type == 2;

    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green("QR Code created successfully:\n"))
        console.log(qrcode)
    })
    
}