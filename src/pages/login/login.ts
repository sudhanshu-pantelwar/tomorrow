import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Backend } from '../../providers/backend';
import { HomePage } from '../home/home';
import { Register } from '../register/register';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  email: any;
  password: any;
  response: any;
  constructor(public fb: Facebook, public backend: Backend, public navCtrl: NavController, public navParams: NavParams) {
  
  }
  login(){
    console.log(this.email);
    console.log(this.password);
    
    this.backend.login(this.email, this.password).subscribe(
      data => { console.log("loginData", data);
                this.response = data;
                this.response = this.response._body;
                if(this.response == "failure"){
                  console.log(this.response);
                }
                else{
                  this.response = JSON.parse(this.response);
                  localStorage.setItem('username', this.email);
                  localStorage.setItem('password', this.password);
                  localStorage.setItem('name', this.response.name);
                  localStorage.setItem('address', this.response.address);
                  console.log(this.response.name);
                  console.log(this.response.address);
                  this.navCtrl.setRoot(HomePage);
                }
          }) 
    } 

  facebook(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => {
      console.log('Logged into Facebook!', res);
      this.fb.api('/me', ["public_profile"]).then((value)=>{
        console.log(JSON.stringify(value));
        localStorage.setItem('name', value.name);
        localStorage.setItem('address', 'NA');
        this.navCtrl.setRoot(HomePage);
      })
  })
}

register(){
  this.navCtrl.push(Register);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
