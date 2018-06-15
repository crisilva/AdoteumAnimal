import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';

import {  HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdotejaPage } from '../pages/adoteja/adoteja';
import {CadastroPage} from '../pages/cadastro/cadastro';

import {UsuariosPage} from '../pages/usuarios/usuarios';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    AdotejaPage,
    CadastroPage,
    UsuariosPage
  ],
  imports: [
  HttpClientModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdotejaPage,
    CadastroPage,
    UsuariosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
