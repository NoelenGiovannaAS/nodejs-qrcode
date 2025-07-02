import prompt from 'prompt'
import { promptSchemaSetup } from './prompts-schema/setup.js'
import { createPassword } from './services/password/create.js'
import { createQRCode } from './services/qr-code/create.js'

async function main(){
    prompt.get(promptSchemaSetup, async (err, choose) => {
        if(err) console.log(err)
            
        if (choose.select == 1) await createQRCode();
        if (choose.select == 2) await createPassword();
    })

    prompt.start();
}

main();