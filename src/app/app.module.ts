import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { CoreModule } from './core/core.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage} from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { MovieReviewsListComponent } from './movie-reviews-list/movie-reviews-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HomeComponent } from './home/home.component';
import { ReviewModule } from './review/review.module';
import { UserModule } from './user/user.module';
import { appInterceptorProvider } from './app.interceptor';

//entry module v koito moje da includevame drugi moduli

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MovieReviewsListComponent,
    UsersListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReviewModule,
    UserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
    
  ],
  providers: [appInterceptorProvider, { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
