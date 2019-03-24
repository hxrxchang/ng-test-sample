import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { memoReducer } from './memo-store/reducers';
import { MemoEffects } from './memo-store/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ memo: memoReducer }),
    EffectsModule.forRoot([MemoEffects])
  ]
})
export class RootStoreModule {}
