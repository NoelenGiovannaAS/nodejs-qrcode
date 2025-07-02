import prompt from 'prompt'
import { promptSchemaQRCode } from '../../prompts-schema/qrcode.js';
import { handleQRCode } from './handleQRCode.js'

export async function createQRCode() {
    prompt.get(promptSchemaQRCode, handleQRCode);
    prompt.start();
}