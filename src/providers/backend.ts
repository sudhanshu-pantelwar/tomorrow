import { Injectable } from '@angular/core';
import { Http ,Headers , RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Backend provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Backend {
  ip_address: any='acerous-copy.000webhostapp.com';
  constructor(public http: Http) {
    console.log('Hello Backend Provider');
  }
login(email, password){
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  let options = new RequestOptions({ headers: headers });
  //let ip_address = '192.168.1.79';
  let url = 'http://'+this.ip_address+'/tomorrow/login.php';
  let body = 'username='+email+'&password='+password;
  console.log(body);
  return this.http.post(url, body, options)
    .map(res => res);
  }

register(email, password, name, address){
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  let options = new RequestOptions({ headers: headers });
  //let ip_address = '192.168.1.79';
  let url = 'http://'+this.ip_address+'/tomorrow/signup.php';
  let body = 'username='+email+'&password='+password+'&name='+name+'&address='+address;
  console.log(body);
  return this.http.post(url, body, options)
    .map(res => res);
  }

uploadImage(username, image){
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  let options = new RequestOptions({ headers: headers });
  //let ip_address = '192.168.1.79';
  let url = 'http://'+this.ip_address+'/tomorrow/uploadImage.php';
  let body = 'username='+username+'&image='+image;
  console.log(body);
  return this.http.post(url, body, options)
    .map(res => res);
  }

  getImage(username){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    //let ip_address = '192.168.1.79';
    let url = 'http://'+this.ip_address+'/tomorrow/getImage.php';
    let body = 'username='+username;
    console.log(body);
    return this.http.post(url, body, options)
      .map(res => res);
    }

  edit(name, address){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  let options = new RequestOptions({ headers: headers });
  //let ip_address = '192.168.1.79';
  let url = 'http://'+this.ip_address+'/tomorrow/editDetails.php';
  let email = localStorage.getItem('username');
  let body = 'username='+email+'&name='+name+'&address='+address;
  console.log(body);
  return this.http.post(url, body, options)
    .map(res => res);
  }
  }
