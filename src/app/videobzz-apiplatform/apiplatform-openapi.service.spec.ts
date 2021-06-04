import { TestBed } from '@angular/core/testing';

import { ApiplatformOpenapiService } from './apiplatform-openapi.service';

describe('ApiplatformOpenapiService', () => {
  let service: ApiplatformOpenapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiplatformOpenapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
