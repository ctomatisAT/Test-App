import { Injectable } from '@angular/core';
import { ElementModel } from 'src/app/models/element.model';
import { TextGenService } from '../text-gen/text-gen.service';

@Injectable({
    providedIn: 'root',
})
export class JsonGenService {
    constructor(private tg: TextGenService) {}

    /**
     * Generates and returns a JSON array of ElementModel
     * @param from
     * @param to
     */
    generateJSON(from: number, to: number): ElementModel[] {
        const jsonArray = [];
        for (let i = from; i < to; i++) {
            jsonArray.push(this.generateItem(i));
        }
        return jsonArray;
    }

    /**
     * Generates an item of type ElementModel
     * @param id
     */
    private generateItem(id: number) {
        return {
            id: id.toString(),
            photo: `https://picsum.photos/id/${id}/500/500`,
            text: this.tg.generateText(5),
        } as ElementModel;
    }
}
