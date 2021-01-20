import { Injectable } from '@angular/core';
import { ElementModel } from 'src/app/models/element.model';
import { TextGenService } from '../text-gen/text-gen.service';

@Injectable({
    providedIn: 'root',
})
export class JsonGenService {
    constructor(private tg: TextGenService) {}

    generateJSON(from: number, to: number): ElementModel[] {
        const jsonArray = [];
        for (let i = from; i < to; i++) {
            jsonArray.push(this.generateItem(i));
        }
        return jsonArray;
    }

    private generateItem(id: number) {
        return {
            id: id.toString(),
            photo: `https://picsum.photos/id/${id}/500/500`,
            text: this.tg.generateText(5),
        } as ElementModel;
    }
}
