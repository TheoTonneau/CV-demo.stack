import * as CryptoJS from 'crypto-js';

export function decrypt(encryptedToken: string, key: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedToken, key);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (!decrypted) {
        throw new Error('Le token déchiffré est invalide.');
    }

    return decrypted;
}

