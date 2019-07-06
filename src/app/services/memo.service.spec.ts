import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MemoService } from './memo.service';

describe('MemoService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }),
  );

  it('should be created', () => {
    const service: MemoService = TestBed.get(MemoService);
    expect(service).toBeTruthy();
  });
});
