import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/Login/login/login.component';
import { RegisterComponent } from './components/Register/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './components/Landing/landing/landing.component';
import { SafePipe } from './pipes/safe.pipe';


import {AngularFirestore} from '@angular/fire/compat/firestore';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { bottomMenuModule } from './components/bottomMenu/bottom-menu/bottom-menu.module';



@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, LandingComponent, SafePipe],
  imports: [
    bottomMenuModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
     IonicModule.forRoot(), AppRoutingModule,provideFirebaseApp(()=>initializeApp(environment.firebase)),
     provideFirestore(()=>getFirestore()),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SafePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}