import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers, Response} from '@angular/http';
import {HttpService} from '../../services/http-service';
import 'rxjs/add/operator/map';
import {Config} from '../../config';
import {AlertService} from '../../services/alert.service';
import {PricingService} from '../../pricing/pricing.service';
import { from } from 'rxjs/observable/from';
declare const $: any;
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
    providers : [AlertService]
})
export class ContentComponent implements OnInit {
  email = '';
  emailchk = false;
  loading = false;
  exists = false;
  model;
  isModal = false;
  isright = false;
  imageurls = 'https://apis.influexpai.com';
  // imageurls = 'http://192.168.29.109:7000';
    get_influencers_profiles: any= [];
   influencers: any = [];
  constructor(private router: Router, private http: Http, private preloadersvc: HttpService, private get_profile: AlertService , private _serv : PricingService) {
  }

  ngOnInit() {
      this.get_profile.getTopInfluencers().subscribe(response => {
          this.get_influencers_profiles = response;

          // for (const itm of this.get_influencers_profiles) {
          //     this.influencers.push(itm.tag.split(','));
          //
          //     console.log('Tagsssssssssssssss', itm.tag);
          // }
          //
          // for (const items of this.get_influencers_profiles) {
          //     this.influencers.push(items.tag.split(','));
          //     console.log('Influencers Profiles are', this.influencers);
          //     console.log('Influencers Profiles are', items.tag);
          // }
      });
      this.timer();
      $('.slick-sampleApp').slick({
          // centerMode: true,
          centerPadding: '30px',
          infinite: true,
          slidesToShow: 3,
          arrows: true,
          prevArrow : ' <button class="leftRs">prev</button>',
          nextArrow : ' <button class="rightRs right" id="right">next</button>',
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
              {
                  breakpoint: 768,
                  settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 3
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 1
                  }
              }
          ]
      });
  }

  text: any = {
    Year: 'Year',
    Month: 'Month',
    Weeks: "Weeks",
    Days: "Days",
    Hours: "Hrs",
    Minutes: "Mins",
    Seconds: "Secs",
    MilliSeconds: "MilliSeconds"
    };

  getStarted() {

    this.loading = true;
    if(this.emailchk && this.exists){
        localStorage.setItem('user_email1', this.email);
        this.router.navigate(['pay']);
        alert('OK Going to payment page')
    }
    else {
        this.proceedstep1();

    }
    window.scroll(0, 0);
    window.onscroll = function () { myFunction() };
    
    var header = document.getElementById("MYHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("box_shadow");
      } else {
        header.classList.remove("box_shadow");
      }
    }


  }

  closeModal() {
    this.isModal = false;
  }

  totaltime;
  timer(){
    this._serv.gettimer().subscribe( data => {
      this.totaltime = data.json();
      // alert(this.totaltime);
      console.log(this.totaltime);
    })
  }
  pricingpackage(value) {
    this.isModal = true;
    localStorage.setItem('package', value);
    console.log(value);
  }

  check(valid) {
    this.exists = false;
    console.log(valid);
    this.emailchk = valid;
    if (valid) {
      this.uniquemail();
    }
  }

  // uniquemail() {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post(Config.api + '/validate/email/',
  //     JSON.stringify({
  //       email: this.email
  //     }), {headers: headers})
  //     .map((response: Response) => {
  //       console.log(response);
  //     });
  // }
  uniquemail() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(Config.api + '/accountverify/',
      JSON.stringify({
        email: this.email
      }), {headers: headers})
      .map((response: Response) => {
          if(response.status==406){

                        this.exists= false;

          }
          else if(response.status==200){
                // alert('Not Exists')
              this.exists= true;
              console.log('Exiting Email is',response['_body']);

          }


      }).subscribe(
              data => {
                  // this.router.navigate([this.returnUrl]);
                  this.loading = false;
              },
              error => {
                  // this.emailchk = false;
                  // this.loading = false;
                  // this.exists = true;
                  // alert(error)
              });
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

  proceedstep1() {
      if(this.emailchk && !this.exists){
          this.isModal = false;
          localStorage.setItem('brandemail', this.email);
          // this.router.navigate([this.returnUrl]);
          this.router.navigate(['pricing/steps']);

      }
      else
      {
          this.router.navigate(['pricing/steps']);

      }
    // this.sendmail()
    //   .subscribe(
    //     data => {
    //       this.isModal = false;
    //       localStorage.setItem('brandemail', this.email)
    //       // this.router.navigate([this.returnUrl]);
    //       this.router.navigate(['pricing/steps']);
    //     },
    //     error => {
    //       // this.alertService.error(error);
    //       this.loading = false;
    //
    //       alert('Server is down please try again after some time.');
    //     });
  }

  chkmail() {
      this.loading = true;
      this.uniquemail();
      //     .subscribe(
      //         data => {
      //             // this.router.navigate([this.returnUrl]);
      //             this.loading = false;
      //             console.log('Data is.....',data);
      //         },
      //         error => {
      //             this.emailchk = false;
      //             // this.alertService.error(error);
      //             this.loading = false;
      //             this.exists = true;
      //             // alert(error)
      //         });
  }
    selected(inf_profile) {
        this.router.navigate(['influencers-detail'], { queryParams: {Profile: JSON.stringify(inf_profile)}});
    }
}
