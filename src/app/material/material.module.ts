import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class MaterialModule {}
