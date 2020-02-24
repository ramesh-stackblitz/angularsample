import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AlbumlistService} from './albumlist/albumlist.service';
import { AuthGuard } from './auth-guard.service';

import { AppComponent } from './app.component';
import { AlbumlistComponent } from './albumlist/albumlist.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumlistComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AlbumlistService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
