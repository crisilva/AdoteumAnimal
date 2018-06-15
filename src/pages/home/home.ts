import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InformacaoPage } from '../informacao/informacao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  informacoes(){
  	this.navCtrl.push('InformacaoPage');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdotejaPage');
  }

}
