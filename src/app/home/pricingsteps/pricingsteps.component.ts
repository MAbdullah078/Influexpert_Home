import {Component, OnInit, HostListener, ViewChild} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {HttpService} from '../../services/http-service';
import {RecaptchaComponent} from 'recaptcha-blackgeeks';
import {AlertService} from '../../services/alert.service';
import {ComponentCanDeactivate} from '../../_guards/pending-changes.guard';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Config } from '../../config';
import {observable} from 'rxjs/symbol/observable';
import {FormControl, Validators} from '@angular/forms';
import swal from "sweetalert2";
import {AppService} from '../../app.service';
declare var $: any;

@Component({
  selector: 'app-pricingsteps',
  templateUrl: './pricingsteps.component.html',
  styleUrls: ['./pricingsteps.component.scss'],
    providers:[AppService]
})

export class PricingstepsComponent implements ComponentCanDeactivate, OnInit {
    userFormControl = new FormControl('', [
        Validators.required
    ]);
    passwordFormControl = new FormControl('', [
        Validators.required]);
    emailFormControl = new FormControl('', [
        Validators.required
    ]);
    firstnameFormControl = new FormControl('', [
        Validators.required ]);
    lastnameFormControl = new FormControl('', [
        Validators.required]);
    wrongPass: boolean;

    isLinear:boolean=true;

    public mask = [/\d/, /\d/, /\d/, /\d/];
    public mask1 = [/[a-zA-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/,
    /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/,
    /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/,
    /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/,
    /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/,
    /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/,
    /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/,
    /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/,
    /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/, /[a-z A-Z]/];
  cardnumber1;
  cardnumber2;
  cardnumber3;
  cardnumber4;
  cardholdername;
  expmonth;
  expyear;
  ccv;
  flipclass = 'credit-card-box';
  step1 = true;
  step2 = false;
  step3 = false;
  step4 = false;
  step1class = 'active';
  // step2class = 'active';
  step2class = '';
  authcode = '';
  fullname = '';
  fname = '';
  lname = '';
  pass = '';
  retypepass = '';
  pass123;
  passnotequal = false;
  email;
  pricepackage = [];
  user_id;
  payment_result;
  showresponse = false;
  loading = false;
  emailconfirmerror = false;
  other = false;
  free = false;
  operation;
  human_verification = false;
    model: any = {};
  // @HostListener allows us to also guard against browser refresh, close, etc.
  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    // insert logic to check if there are pending changes here;
    // returning true will navigate without confirmation
    // returning false will show a confirm dialog before navigating away
    return this.showresponse;
  }

  constructor(private http: Http, private svcObj: AppService,private preloadersvc: HttpService, private alertService: AlertService) {
  }


  @ViewChild(RecaptchaComponent) captcha: RecaptchaComponent;

  ngOnInit() {
    const pricing = localStorage.getItem('package');
    // if (pricing === 'free') {
    //   this.free = true;
    //   this.other = false;
    // } else {
    //   this.other = true;
    //   this.free = false;
    // }
    if (pricing === 'pro monthly') {
      this.pricepackage[0] = 'P';
      this.pricepackage[1] = 'M';
    } else if (pricing === 'pro yearly') {
      this.pricepackage[0] = 'P';
      this.pricepackage[1] = 'Y';
    } else if (pricing === 'bui monthly') {
      this.pricepackage[0] = 'B';
      this.pricepackage[1] = 'M';
    } else if (pricing === 'bui yearly') {
      this.pricepackage[0] = 'B';
      this.pricepackage[1] = 'Y';
    } else if (pricing === 'free') {
      this.pricepackage[0] = 'S';
      this.pricepackage[1] = 'M';
    }
    // else if (pricing === 'pro yearly') {
    //   this.pricepackage[0] = 'P';
    //   this.pricepackage[1] = 'Y';
    // }

    // this.operation = localStorage.getItem('operation');
    // console.log('operation',  this.operation);

    // localStorage.removeItem('operation');

    this.email = localStorage.getItem('brandemail');
    localStorage.removeItem('brandemail');
    localStorage.removeItem('package');
    // this.step1class = 'active';
    this.step1class = 'active';
    this.step2class = '';
  }
  resolved(e) {
    console.log(e)
    if (e) {
      this.human_verification = true;
    } else {
      this.human_verification = false;
    }
  }
  sendmail() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.preloadersvc.post(Config.api + '/confirm/email/',
      JSON.stringify({
        email: this.email
      }), {headers: headers})
      .map((response: Response) => {
        console.log(response);
      });
  }
    paidSignup() {
        this.loading = true;
            this.svcObj.brand_Signup(this.model.username, this.model.firstname,this.model.lastname,this.model.email,  this.model.password)
                .subscribe(
                    data => {
                        swal('Your account has been Registered,', 'Your Account will expire in 7 days', 'success');
                        localStorage.setItem('newUSerEmail', this.model.email);

                    },
                    error => {
                        swal('Account Not Register', 'Some Server Side Error', 'error');
                        this.loading = false;
                    });

    }

  correctemail() {
    this.emailconfirmerror = false;
  }

  proceedstep1() {
    this.loading = true;
    this.sendmail()
      .subscribe(
        data => {
          // localStorage.setItem('brandemail', this.email)
          // this.router.navigate([this.returnUrl]);
          // this.router.navigate(['pricing/steps']);
          this.loading = false;
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
          // alert(error)
        });
  }

  flip() {
    this.flipclass = 'credit-card-box hover';
  }

  flipagain() {
    this.flipclass = 'credit-card-box';
  }


  pay() {
    if (this.free) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.preloadersvc.post(Config.api + '/cr/',
        JSON.stringify({
          creditno: this.cardnumber1 + this.cardnumber2 +
          this.cardnumber3 + this.cardnumber4, exp: this.expmonth + '/' + this.expyear,
          ccv: this.ccv, name: this.cardholdername,
          id: this.user_id, pricepackage: this.pricepackage[0],
          type: this.pricepackage[1]
        }), {headers: headers})
        .map((response: Response) => {

          this.payment_result = response.json();
          console.log(this.payment_result);
        });
    } else {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.preloadersvc.post(Config.api + '/cr/',
        JSON.stringify({
          creditno: this.cardnumber1 + this.cardnumber2 +
          this.cardnumber3 + this.cardnumber4, exp: this.expmonth + '/' + this.expyear,
          ccv: this.ccv, name: this.cardholdername,
          id: this.user_id, pricepackage: this.pricepackage[0],
          type: this.pricepackage[1]
        }), {headers: headers})
        .map((response: Response) => {

          this.payment_result = response.json();
          console.log(this.payment_result);
        });
    }
  }

  // step3
  proceed() {
    // this.loading = true;
    this.pay().subscribe(
        data => {
            this.alertService.success('Payment Success', true);
            this.step3 = false;
            this.showresponse = true;
        },
        error => {
          this.alertService.error(error);
          // this.loading = false;
        });
  }

  // step 1 done
  gotocreditcard() {
    this.emailconfirmerror = false;
    // this.step1 = false;
    // this.step2 = true;
    this.step1class = '';
    // this.step2class = 'active';
    this.checkcode(this.authcode)
      .subscribe(
        data => {
          // this.router.navigate([this.returnUrl]);
          this.step1 = false;
          this.step2 = true;
          this.step1class = '';
          this.step2class = 'active';
          this.alertService.success('Email confirmed.', true);
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.emailconfirmerror = true;
          // this.loading = false;
        });
  }

  checkcode(key) {
    console.log(key)
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.preloadersvc.post(Config.api + '/verify/email/',
      JSON.stringify({
        email: this.email,
        key: key
      }), {headers: headers})
      .map((response: Response) => {
        // console.log(response)

      });
  }

  saveaccountdetail() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.preloadersvc.post(Config.api+ '/brand_signup/',
      JSON.stringify({
          username: this.fullname,
          firstname: this.fname,
          lastname: this.lname,
          email: this.email,
          password: this.pass
      }), {headers: headers})
      .map((response: Response) => {
        console.log(response);
        this.user_id = response.json().user_id;
        console.log(this.user_id);
      });
  }

  // step 2 done
  gotocheckout() {
    if (this.pass === this.retypepass && this.captcha.getResponse() ) {
      if (this.free) {
        this.proceed();
        this.saveaccountdetail()
          .subscribe(
            data => {
              // this.passnotequal = false;
              // this.step2 = false;
              // this.step3 = true;
              // this.step2class = '';
              // this.step3class = 'active';
              // this.alertService.success('Account details submitted', true);
            },
            error => {
              this.alertService.error(error);
              this.captcha.reset();
              // this.loading = false;
            });
      } else {
        this.saveaccountdetail()
          .subscribe(
            data => {
              this.passnotequal = false;
              this.step1 = false;
              this.step2 = true;
              this.step1class = '';
              this.step2class = 'active';
              this.alertService.success('Account details submitted', true);
            },
            error => {
              this.alertService.error(error);
              // this.loading = false;
            });
      }

    } else {
      this.passnotequal = true;
      this.captcha.reset();
    }
  }

  chkpass() {
    if (this.pass === this.retypepass) {
      this.passnotequal = false;
    }
  }
}
