import { TestBed } from '@angular/core/testing';

import { FavoriteModalService } from './favorite-modal.service';

describe('FavoriteModalService', () => {
  let service: FavoriteModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
