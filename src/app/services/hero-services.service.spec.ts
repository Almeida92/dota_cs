import { TestBed, inject } from '@angular/core/testing';

import { HeroServicesService } from './hero-services.service';

describe('HeroServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroServicesService]
    });
  });

  it('should be created', inject([HeroServicesService], (service: HeroServicesService) => {
    expect(service).toBeTruthy();
  }));
});
