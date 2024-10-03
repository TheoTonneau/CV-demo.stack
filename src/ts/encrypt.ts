import * as CryptoJS from 'crypto-js';
import * as fs from 'fs';
import * as path from 'path';

interface Config {
    apiKey: {
        sensitive: boolean,
        type: string,
        value: string
    };
    apiUrl: {
        sensitive: boolean,
        type: string,
        value: string
    };
}

const config: Config = require('../js/config.json');

function generateRandomKey(): string {
    return CryptoJS.lib.WordArray.random(32).toString();
}

export function encrypt(token: string): { apiKey: string, key: string } {
    const key = generateRandomKey(); // Clé de chiffrement aléatoire
    const encrypted = CryptoJS.AES.encrypt(token, key).toString(); // Chiffrement AES

    return {
        apiKey: encrypted,
        key: key // Retourne la clé pour permettre le déchiffrement
    };
}

const {apiKey, key } = encrypt(config.apiKey.value);
const apiURL: string = config.apiUrl.value;

export const data: { apiUrl: string, apiKey: string, key: string } = ({
    "apiUrl": apiURL,
    "apiKey": apiKey,
    "key": key
});

const filePath = path.join(__dirname, '../js/data.json');

const dir = path.dirname(filePath);
fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) throw err;


    fs.writeFile(filePath, JSON.stringify(data), function (err: NodeJS.ErrnoException | null) {
        if (err) throw err;
        console.log('File created successfully');
    });
});