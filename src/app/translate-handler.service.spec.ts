import { TestBed } from '@angular/core/testing';

import { TranslateHandlerService } from './translate-handler.service';

describe('TranslateHandlerService', () => {
  let service: TranslateHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
