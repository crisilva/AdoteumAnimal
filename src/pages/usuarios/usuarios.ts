import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import { Http, Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";


@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {


  public data:any;
  public obg: any;

 getTarefas() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http
        .get(`http://localhost:3000/usuarios`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http) {
  
   this.getTarefas().then(data => {
             this.obj = data;
              this.result = this.obj;
            }); 

  }



  home(){
  	this.navCtrl.setRoot(HomePage);
  }
  
}
