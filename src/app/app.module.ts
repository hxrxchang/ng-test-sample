import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './containers/form/form.component';
import { MemoListComponent } from './containers/memo-list/memo-list.component';
import { TopComponent } from './pages/top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MemoListComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
