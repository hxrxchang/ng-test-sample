import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootStoreModule } from './root-store/root-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { InMemoryDataService } from './in-mem/in-memory-data.service';

// app
import { AppComponent } from './app.component';
// pages
import { TopComponent } from './pages/top/top.component';
// containers
import { MemoListComponent } from './containers/memo-list/memo-list.component';
import { UploadComponent } from './containers/upload/upload.component';
// components
import { FormComponent } from './components/form/form.component';
import { ButtonComponent } from './components/button/button.component';
import { MemoItemComponent } from './components/memo-item/memo-item.component';
import { HeaderComponent } from './components/header/header.component';

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
