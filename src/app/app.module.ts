import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreModule } from './root-store/root-store.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryDataService } from './in-mem/in-memory-data.service';
import { MaterialModule } from './material/material.module';

// app
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
// components
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { MemoItemComponent } from './components/memo-item/memo-item.component';
// containers
import { MemoListComponent } from './containers/memo-list/memo-list.component';
import { UploadComponent } from './containers/upload/upload.component';
// pages
import { TopComponent } from './pages/top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoListComponent,
    TopComponent,
    UploadComponent,
    FormComponent,
    ButtonComponent,
    MemoItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true
    }),
    RootStoreModule,
    StoreDevtoolsModule.instrument({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
