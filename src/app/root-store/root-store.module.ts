import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MemoEffects } from './memo-store/effects';
import { memoReducer } from './memo-store/reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ memo: memoReducer }),
    EffectsModule.forRoot([MemoEffects])
  ]
})
export class RootStoreModule {}
