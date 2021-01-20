import { Component, OnInit } from '@angular/core';
import { ElementModel } from '../models/element.model';
import { JsonGenService } from '../services/json-gen/json-gen.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    itemsList: ElementModel[] = [];
    itemNumber = 1;
    itemLimit = 50;

    constructor(private jgSrv: JsonGenService) {}

    ngOnInit() {
        this.fillList(false, false, '');
    }

    fillList(shouldComplete: boolean, shouldDisable: boolean, event) {
        const newItems = this.jgSrv.generateJSON(this.itemNumber, this.itemNumber + this.itemLimit);
        setTimeout(() => {
            this.itemsList = [...this.itemsList, ...newItems];
            if (shouldComplete) {
                event.target.complete();
            }
            if (shouldDisable) {
                event.target.disabled = true;
            }
            this.itemNumber += this.itemLimit;
        }, 500);
    }

    doInfinite(event) {
        let shouldDisable = false;
        if (this.itemsList.length >= 4000) {
            shouldDisable = true;
        }
        this.fillList(true, shouldDisable, event);
    }
}
