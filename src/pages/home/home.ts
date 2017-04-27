import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Backend } from '../../providers/backend';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: any;
  address: any;
  imgFromServer: any;
  username: any;
  response: any;
  source: any;
  constructor(private _DomSanitizationService: DomSanitizer, public backend:Backend, public navCtrl: NavController) {
    // this.imgFromServer = '';
    // this.name =localStorage.getItem('name');
    // this.address = localStorage.getItem('address');
    // this.username = localStorage.getItem('username');
    // this.imgFromServer = 'https://acerous-copy.000webhostapp.com/tomorrow/uploads/'+this.username+'.jpg';
    // this.bikeImage = document.getElementById("bikeImage") as HTMLImageElement;
  //   this.backend.getImage(this.username).subscribe(data => { console.log("loginData", data);
  //               this.response = data;
  //               this.response = this.response._body;
  //               if(this.response == "failure"){
  //                 console.log(this.response);
  //               }
  //               else{
                  
  //                 this.imgFromServer = this.response;
  // }
  //   })

  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad EditProfile');
    // this.imgFromServer = '';
    // this.name =localStorage.getItem('name');
    // this.address = localStorage.getItem('address');
    // this.username = localStorage.getItem('username');
    // this.imgFromServer = 'https://acerous-copy.000webhostapp.com/tomorrow/uploads/'+this.username+'.jpg';
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfile');
    this.imgFromServer = '';
    this.name =localStorage.getItem('name');
    this.address = localStorage.getItem('address');
    this.username = localStorage.getItem('username');
    this.imgFromServer = 'https://acerous-copy.000webhostapp.com/tomorrow/uploads/'+this.username+'.jpg?'+ new Date().getTime();;
  
  }
}
