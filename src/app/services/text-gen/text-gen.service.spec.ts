import { TestBed } from '@angular/core/testing';

import { TextGenService } from './text-gen.service';

describe('TextGenService', () => {
    let service: TextGenService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TextGenService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return a string of legth 5', () => {
        expect(service.generateText(5).length).toBe(5);
    });
});
