import { Injectable } from '@angular/core';
import { TextGenService } from '../text-gen/text-gen.service';

@Injectable({
    providedIn: 'root',
})
export class JsonGenService {
    constructor(private tg: TextGenService) {}

    generateJSON(length: number) {
        const jsonArray = [];
        for (let i = 1; i <= length; i++) {
            jsonArray.push(this.generateItem(i));
        }
        return jsonArray;
    }

    private generateItem(id: number) {
        return {
            id: id.toString(),
            photo: `https://picsum.photos/id/${id}/500/500`,
            text: this.tg.generateText(5),
        };
    }
}
