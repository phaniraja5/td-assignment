import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule} from "./material.module";
import {HttpClientModule} from "@angular/common/http";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserSummaryComponent } from './user-summary/user-summary.component';
import {StoreModule} from "@ngrx/store";
import {userReducer} from "./store/reducers/user.reducer";
import {EffectsModule} from "@ngrx/effects";
import {UserEffect} from "./store/effects/user.effect";

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserListComponent,
    UserSummaryComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialExampleModule,
        ReactiveFormsModule,
      StoreModule.forRoot({ users: userReducer }),
        EffectsModule.forRoot([UserEffect])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
