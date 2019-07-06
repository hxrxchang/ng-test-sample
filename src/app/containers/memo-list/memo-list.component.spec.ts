import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './../../in-mem/in-memory-data.service';
import { RootStoreModule } from './../../root-store/root-store.module';
import { MemoListComponent } from './memo-list.component';

describe('MemoListComponent', () => {
  let component: MemoListComponent;
  let fixture: ComponentFixture<MemoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemoListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule, RootStoreModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)],
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
