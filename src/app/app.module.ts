import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { CoreModule } from './core/core.module';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { MovieReviewsListComponent } from './movie-reviews-list/movie-reviews-list.component';
import { UsersListComponent } from './users-list/users-list.component';

//entry module v koito moje da includevame drugi moduli

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MovieReviewsListComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
