import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MemberComponent } from './member/member.component';

// 2. Add your credentials from step 1
const config = {
  apiKey: 'AIzaSyCUDUZ3F_HwOPF74FM6gc1O2f_N4c5t5EA',
  authDomain: 'noter-ecac1.firebaseapp.com',
  databaseURL: 'https://noter-ecac1.firebaseio.com',
  projectId: 'noter-ecac1',
  storageBucket: 'noter-ecac1.appspot.com',
  messagingSenderId: '532226072842'
};
const appRoutes: Routes = [
  { path: 'loginPage', component: AppComponent },
];
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  declarations: [ AppComponent, MemberComponent ],
  bootstrap: [ AppComponent ]
})


export class AppModule {}
