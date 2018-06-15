import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdotejaPage } from '../adoteja/adoteja';

@IonicPage()
@Component({
  selector: 'page-informacao',
  templateUrl: 'informacao.html',
})
export class InformacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacaoPage');
  }

  adote(){
  	this.navCtrl.push(AdotejaPage);
  }

}
