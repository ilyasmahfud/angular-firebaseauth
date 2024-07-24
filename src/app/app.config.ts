import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"angular-secure-app","appId":"1:747744258730:web:e2ebf630eee2241ca5fed3","storageBucket":"angular-secure-app.appspot.com","apiKey":"AIzaSyBYT4kMr9Q4hmW-lFXImrAqEGFYrWNq2WA","authDomain":"angular--app-17d7a.firebaseapp.com","messagingSenderId":"747744258730"})), provideAuth(() => getAuth())]
};
