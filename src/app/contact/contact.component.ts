import {Component, Input, OnInit} from '@angular/core';

import {HttpService} from '../services/http-service';
import {AppService} from '../app.service';
import swal from 'sweetalert2'
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
    providers:[AppService]
})
export class ContactComponent implements OnInit {
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  constructor(private obj: AppService, private preloadersvc: HttpService) { }

  ngOnInit() {
  }

model: any= {};


    onSubmit(){
            this.obj.contact_Us(this.model.name, this.model.email, this.model.phone, this.model.message)
                .subscribe(data =>{console.log('Sent')});
            this.show();
            this.clear();
            // alert(this.model.name),alert(this.model.email),alert(this.model.phone),alert(this.model.message)

            console.log(this.model.name)
            console.log(this.model.email)
            console.log(this.model.phone)
            console.log(this.model.message)
    }
    show(){
      swal({
          type: 'success',
          title: 'Your Message has been sent'
      })
    }
    clear(){
      this.model.name= '',
          this.model.email='',
            this.model.phone='',
              this.model.message=''
    }
}

@Component({
  selector: 'whatisinfluexpai',
  templateUrl: 'what-is-influexpai.html',
})
export class WhatIsInfluexpaiComponent {

  constructor() { }
  ngOnInit() {
  }
}

@Component({
  selector: 'HowItWorks',
  templateUrl: 'How-It-Works.html',
})
export class HowItWorksComponent {

  constructor() { }
  ngOnInit() {
  }
}

@Component({
  selector: 'Terms-and-conditions',
  templateUrl: 'Terms-and-conditions.html',
})
export class TermsAndConditionsComponent {

  constructor() { }
  ngOnInit() {
  }
}

@Component({
  selector: 'privacy-and-policy',
  templateUrl: 'privacy-and-policy.html',
})
export class PrivacyAndPolicyComponent {

  constructor() { }
  ngOnInit() {
  }
}

@Component({
  selector: 'blog',
  templateUrl: 'blog.html',
    providers: [AppService]
})
export class BlogComponent {

    getBlogs:any;
    // @Input() id: ;
  constructor(private obj:AppService, private router: Router) { }
  ngOnInit() {
  this.getAllBlogs();
  }

        getAllBlogs(){
                this.obj.get_All_Blog().subscribe(data=>{
                    this.getBlogs= data
                console.log(this.getBlogs);
                })
        }
    getcurrentBlog(page){
        this.router.navigate(['blog1'], { queryParams: {Profile: JSON.stringify(page)}});

    }
}

