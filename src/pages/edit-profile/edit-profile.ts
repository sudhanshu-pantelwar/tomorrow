import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Backend } from '../../providers/backend';
import { HomePage } from '../home/home';
/**
 * Generated class for the EditProfile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfile {
  response:any;
  name: any;
  address: any;
  constructor(public backend:Backend, public navCtrl: NavController, public navParams: NavParams) {
    this.name = localStorage.getItem('name');
    this.address = localStorage.getItem('address');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfile');
  }

  

  edit(){
    this.backend.edit(this.name, this.address).subscribe(
      data => { console.log("loginData", data);
                this.response = data;
                this.response = this.response._body;
                if(this.response == "failure"){
                  alert(this.response);
                }
                else{
                  alert(this.response);
                }
      let email = localStorage.getItem('username');
      let password = localStorage.getItem('password');
      this.backend.login(email, password).subscribe(
      data => { console.log("loginData", data);
                this.response = data;
                this.response = this.response._body;
                if(this.response == "failure"){
                  console.log(this.response);
                }
                else{
                  this.response = JSON.parse(this.response);
                  localStorage.setItem('name', this.response.name);
                  localStorage.setItem('address', this.response.address);
                  console.log(this.response.name);
                  console.log(this.response.address);
                  this.navCtrl.setRoot(HomePage);
                }
          }) 
    })
  }
}
