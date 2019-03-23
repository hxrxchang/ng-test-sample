import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { memoReducer } from './memo-store/reducers';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({ memo: memoReducer })]
})
export class RootStoreModule {}
