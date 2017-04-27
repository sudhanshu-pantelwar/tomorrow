import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Backend } from '../../providers/backend';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
/**
 * Generated class for the UploadImage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-upload-image',
  templateUrl: 'upload-image.html',
})
export class UploadImage {
  base64Image: any;
  flag:any;
  response:any;
  constructor(private transfer: Transfer, public backend:Backend, private camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadImage');
  }

  imageUpload(){
    var options = {
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,      
    quality: 50,
    // targetWidth: 1000,
    // targetHeight: 1000,
    encodingType: this.camera.EncodingType.JPEG,      
    // correctOrientation: true
  };
//     const options: CameraOptions = {
//   quality: 100,
//   destinationType: this.camera.DestinationType.DATA_URL,
//   encodingType: this.camera.EncodingType.JPEG,
//   mediaType: this.camera.MediaType.PICTURE
// }
    this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
          console.log(imageData);
          this.base64Image = "data:image/jpeg;base64," + imageData;
          this.flag = 'true';
          }, (err) => {
            console.log(err);
          // Handle error
          });

   }

   server(){
     let username = localStorage.getItem('username');
    //  this.backend.uploadImage(username, this.base64Image).subscribe(data => { console.log("loginData", data);
    //             this.response = data;
    //             this.response = this.response._body;
    //             if(this.response == "success"){
    //               console.log("image uploaded successfull");
    //             }
    //             else{
    //               console.log("something went wrong");
    //             }
    //             this.flag='false';
    //  })
    const fileTransfer: TransferObject = this.transfer.create();

      let options1: FileUploadOptions = {
         fileKey: 'file',
         fileName: username+'.jpg',
         headers: {}
      
      }

  fileTransfer.upload(this.base64Image, 'http://acerous-copy.000webhostapp.com/tomorrow/upload.php', options1)
   .then((data) => {
     // success
     alert("success");
   }, (err) => {
     // error
     alert("error"+JSON.stringify(err));
   });

   this.flag = false;

   }
}
