import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { CoreModule } from './core/core.module';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MainComponent } from './main/main.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ThemesListComponent } from './themes-list/themes-list.component';

//entry module v koito moje da includevame drugi moduli

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PostsListComponent,
    ThemesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
