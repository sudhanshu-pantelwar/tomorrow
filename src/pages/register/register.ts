import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Backend } from '../../providers/backend';
/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  username: any;
  password: any;
  name: any;
  address: any;
  response: any;
  private imageSrc: string;
  base64Image: any;
  constructor(public backend: Backend, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  register(){
    console.log(this.username, this.password, this.name, this.address);
    this.backend.register(this.username, this.password, this.name, this.address).subscribe(
      data => { console.log("loginData", data);
      this.response = data;
      this.response = this.response._body;
      console.log(this.response);
      if(this.response == "success"){
        this.navCtrl.pop();
      }
      else{
        console.log("Failure");
      }
    
    })
  }

  
  
}
