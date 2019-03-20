import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';


// app
import { AppComponent } from './app.component';
// pages
import { TopComponent } from './pages/top/top.component';
// containers
import { MemoListComponent } from './containers/memo-list/memo-list.component';
import { UploadComponent } from './containers/upload/upload.component';
// components
import { FormComponent } from './components/form/form.component';

import { InMemoryDataService } from './in-mem/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MemoListComponent,
    TopComponent,
    UploadComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
