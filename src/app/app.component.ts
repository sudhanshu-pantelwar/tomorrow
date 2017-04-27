import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { EditProfile } from '../pages/edit-profile/edit-profile';
import { ListPage } from '../pages/list/list';
import { Backend } from '../providers/backend';
import { UploadImage } from '../pages/upload-image/upload-image';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  username: any;
  password: any;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public backend: Backend, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Upload Image', component: UploadImage},
      { title: 'Edit Profile', component: EditProfile},
      { title: 'Logout', component: ListPage }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.username = localStorage.getItem('username');
      this.password = localStorage.getItem('password');
      if(!(this.username == null || this.password == null)){
                console.log('please enter something');
                // localStorage.getItem('userdata');
                this.rootPage = HomePage;
                
            }
            else{ 
                  this.rootPage = Login;
                  
                }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
