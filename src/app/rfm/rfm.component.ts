import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {FormControl, NgForm, Validators} from '@angular/forms';
import swal from 'sweetalert2';
import { Config } from '../config';
import { Http,Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './rfm.component.html',
  providers:[AppService],
  styleUrls: ['./rfm.component.scss']
})
export class RfmComponent implements OnInit {
  
  rfmFormControl = new FormControl('', [
    Validators.required
]);

  loginurl: string = "http://brand.influexpai.com/login";
  infurl: string = "http://influencer.influexpai.com/authentication/signin";
  loginsurl: string = 'https://brand.influexpai.com/register';
  infsurl: string = "http://influencer.influexpai.com/authentication/signup";
  influencersppurl: string = 'https://influencer.influexpai.com/authentication/signin';
  brand_app_cat_url= 'https://brand.influexpai.com/dashboard';
  brand_app_fb_url = 'https://brand.influexpai.com/facebook/search';
  brand_app_insta_url = 'https://brand.influexpai.com/instagram/search';
  brand_app_twi_url = 'https://brand.influexpai.com/twitter/search';
  brand_app_blog_url = 'https://brand.influexpai.com/blogosphere/search';
  brand_app_yt_url = 'https://brand.influexpai.com/youtube/search';
  brand_app_ld_url = 'https://brand.influexpai.com/linkedin/search';
  brand_app_pt_url = 'https://brand.influexpai.com/pinterest/search';
    checkflag: any;
    pricing: number;
    name: any;
    email: any;
    phone: any;
    wesites: any;
    services: any;
    title: any;
    category: any;
    description: any;
    pictures: any;
    video: any;
    file: any;
    questions: any;
    offer_to_influencer: any;
    input: FormData;
    url: any = 'JPG, GIF, PNG';


  constructor(private router:Router, private obj: AppService, private fileUploadService : AppService,
    private https: HttpClient,
    private newService : AppService, private http: Http) { }

  ngOnInit() {
    // const header = $('#header');
    // $(window).on("scroll", function() {
    //   $(window).scrollTop() >= 170 ? header.addClass("fixed") : header.removeClass("fixed");
    // });
    window.scroll(0,0);
  }
  model: any= {};


  // openSA(){

  // }

 

// fileToUpload: File = null;
// handleFileInput(files: FileList) {
//   this.fileToUpload = files.item(0);
// }

// uploadFileToActivity() {
//   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
//     // do something, if upload success
//     console.log('success')
//     }, error => {
//       console.log(error);
//     });
// }

onChange(event: EventTarget) {
  this.pictures = new FormData();
  const eventObj: MSInputMethodContext = <MSInputMethodContext>event;
  const target: HTMLInputElement = <HTMLInputElement>eventObj.target;
  this.pictures.append('fileToUpload', target.files[0]);
  // console.log(this.pictures);
  console.log('Name is :',  this.pictures)
  alert(this.pictures);
}

onChange2(event: EventTarget) {
  this.file = new FormData();
  const eventObj: MSInputMethodContext = <MSInputMethodContext>event;
  const target: HTMLInputElement = <HTMLInputElement>eventObj.target;
  this.file.append('fileToUpload', target.files[0]);
  // console.log(this.pictures);
  console.log('Name is :',  this.file)
  alert(this.file);
}

onChange3(event: EventTarget) {
  this.video = new FormData();
  const eventObj: MSInputMethodContext = <MSInputMethodContext>event;
  const target: HTMLInputElement = <HTMLInputElement>eventObj.target;
  this.file.append('fileToUpload', target.files[0]);
  // console.log(this.pictures);
  console.log('Name is :',  this.video)
  alert(this.video);
}

readUrl(event: any) {
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.url = e.target.result;
      console.log(this.url);
    };
  
    reader.readAsDataURL(event.target.files[0]);
  }
}


  // onSelectFile(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     reader.onload = (e) => { // called once readAsDataURL is completed
  //       this.url = e.target.result;
  //     }
  //   }
  // }


upload() {
  this.https.post(
    Config.Imageurlupload,
    this.pictures, { responseType: 'text' }).subscribe(data => {
      if (data === "Sorry, not a valid Image.Sorry, only JPG, JPEG, PNG & GIF files are allowed.Sorry, your file was not uploaded.") {
      }
      else {

        
        console.log(data);
        alert(data);
        this.pictures = data;
      
        this.onSubmit();
        alert('ok')
      }
    });



}
onSubmit(){
    
  this.obj.post_Request(this.model.title, this.model.category, this.model.description,
    this.pictures, this.video, this.file, 
     this.model.questions, this.model.offer_to_influencer,this.model.url).subscribe(
      data =>{
          console.log(data);
      },
      error1 => {
          swal('Your Data is invalid', 'or we have some server error ', 'error')
      })
      console.log(this.model.title)
      console.log(this.pictures)
      console.log(this.file)
      console.log('video upload')
      console.log(this.model.category)
      console.log(this.model.description)
      console.log(this.model.questions)
      console.log(this.model.offer_to_influencer)
      console.log(this.model.url)
      
      
}
}
