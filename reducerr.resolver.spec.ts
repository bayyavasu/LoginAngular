import { TestBed } from '@angular/core/testing';

import { ReducerrResolver } from './reducerr.resolver';

describe('ReducerrResolver', () => {
  let resolver: ReducerrResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReducerrResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
