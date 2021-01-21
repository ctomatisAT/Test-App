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
    filteredItemsList: ElementModel[] = [];
    itemNumber = 1;
    itemLimit = 50;

    constructor(private jgSrv: JsonGenService) {}

    ngOnInit() {
        this.fillList(false, '');
    }

    fillList(shouldComplete: boolean, event) {
        const newItems = this.jgSrv.generateJSON(this.itemNumber, this.itemNumber + this.itemLimit);
        setTimeout(() => {
            this.itemsList = [...this.itemsList, ...newItems];
            this.filteredItemsList = this.itemsList;
            if (shouldComplete) {
                event.target.complete();
            }
            if (this.itemsList.length >= 4000) {
                event.target.disabled = true;
            }
            this.itemNumber += this.itemLimit;
        }, 500);
    }

    filterList(filter: string) {
        this.filteredItemsList = [];
        for (const item of this.itemsList) {
            if (item.id === filter || item.text.toLowerCase().startsWith(filter.toLowerCase())) {
                this.filteredItemsList.push(item);
            }
        }
    }

    doInfinite(event) {
        this.fillList(true, event);
    }

    onSearch(event) {
        if (event.target.value) {
            this.filterList(event.target.value.toString());
        } else {
            this.filteredItemsList = this.itemsList;
        }
    }
}
