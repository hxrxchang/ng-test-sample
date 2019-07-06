import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './../../in-mem/in-memory-data.service';
import { RootStoreState } from './../../root-store';
import { MemoStoreActions } from './../../root-store/memo-store';
import { RootStoreModule } from './../../root-store/root-store.module';
import { UploadComponent } from './upload.component';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;
  let store: Store<RootStoreState.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ReactiveFormsModule, RootStoreModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call upload() method', () => {
    const memo = {
      id: '12345',
      content: 'hello',
    };
    const addMemoRequestAction = new MemoStoreActions.AddMemoRequestAction(memo);
    component.upload(memo);
    expect(store.dispatch).toHaveBeenCalledWith(addMemoRequestAction);
  });
});
