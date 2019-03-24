import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MemoListComponent } from './memo-list.component';
import { RootStoreModule } from './../../root-store/root-store.module';

describe('MemoListComponent', () => {
  let component: MemoListComponent;
  let fixture: ComponentFixture<MemoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemoListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule, RootStoreModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
