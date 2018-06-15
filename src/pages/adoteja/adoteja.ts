import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CadastroPage} from '../cadastro/cadastro';


@IonicPage()
@Component({
  selector: 'page-adoteja',
  templateUrl: 'adoteja.html',
})
export class AdotejaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



Adotar(id){
 console.log(id);
	this.navCtrl.push(CadastroPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdotejaPage');
  }

}
