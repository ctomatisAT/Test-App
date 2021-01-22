import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TextGenService {
    /**
     * Generates a randome text
     * @param length
     */
    generateText(length: number) {
        let result = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < length; i++) {
            result = result.concat(chars.charAt(Math.floor(Math.random() * chars.length)));
        }
        return result;
    }
}
