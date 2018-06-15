import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,  ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import {UsuariosPage} from '../usuarios/usuarios';
import "rxjs/add/operator/map";


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

	private url:string = "http://localhost:3000/usuarios";

	public usuario = {
		nome: "",  
		email: "",  
		telefone : "",
		cidade : ""
	};

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public toastCtrl: ToastController,
  			  public http : Http
  			  ) {
  }


cadastro(usuario){
    let headers = new Headers();
    headers.append('Content-type','application/json');

    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url, usuario, options)
            .map(res => res.json())
            .subscribe(data => {
              const toast = this.toastCtrl.create({
                message: 'Usúario cadastrado com Sucesso!',
                 duration: 2000
                
              });
  
			toast.present();
			this.navCtrl.setRoot(UsuariosPage);
             
            });
    }




}
