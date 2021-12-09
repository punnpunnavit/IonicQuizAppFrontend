
   
import { TestBed } from '@angular/core/testing';

import { QuestionsProviderService } from './questions-provider.service';

describe('WeatherProviderService', () => {
  let service: QuestionsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});