import { TestBed } from '@angular/core/testing';
import { TextGenService } from '../text-gen/text-gen.service';

import { JsonGenService } from './json-gen.service';

describe('JsonGenService', () => {
    let service: JsonGenService;
    let tgSrvSpy;

    beforeEach(() => {
        tgSrvSpy = jasmine.createSpyObj({
            generateText: 'ABCDE',
        });
        TestBed.configureTestingModule({ providers: [{ provider: TextGenService, useValue: tgSrvSpy }] });
        service = TestBed.inject(JsonGenService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return an array of 100 objects', () => {
        expect(service.generateJSON(100).length).toBe(100);
    });
});
