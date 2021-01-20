import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TextGenService {
    generateText(length) {
        let result = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < length; i++) {
            result = result.concat(chars.charAt(Math.floor(Math.random() * chars.length)));
        }
        return result;
    }
}
