// import { SetHeaders } from './../../../AuthGuards/auth.interceptor';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import { Headers, Http, Response } from '';
import swal from 'sweetalert2';
@Injectable()
export class PricingService {
    constructor(private http: HttpClient, private _https : Http) { }

    get_card_info() {
        // return this.http.get('https://apis.rfpgurus.com/payment/cardinfo/');
        return this.http.get('https://devapis.com/payment/cardinfo/', { })
    }
    getcounty(){
        return this.http.get('https://apis.rfpgurus.com/all_countries/')
      }
    authenticate_service(uid) {
        return this.http.get('https://apis.com/activate/' + uid);
    }
    usersubscribe(username: string) {
        return this.http.post('https://apis.influexpai.com/payment/pkg_sub/', { 'username': username });
      }
      purchaseHistory() {
        return this.http.get('https://apis.influexpai.com/payment/history/username/' + JSON.parse(localStorage.getItem('currentUser')).username + '/');
    }
    deactivetrial() {
      let headers = new Headers();
      headers = new Headers({'Authorization': 'JWT ' + JSON.parse(localStorage.getItem('currentUser')).token});
      headers.append('Content-Type', 'application/json');
      return this._https.get('https://apis.influexpai.com/payment/deactivate_trail/', {headers:headers}).map((response: Response) => response.json());
    }
    trialHistory() {
      return this.http.get('https://apis.rfpgurus.com/trail_history/');
    }
    gettimer(){
        return this._https.get('https://apis.rfpgurus.com/super/timer_for_sale/')
      }
pricingimage(){
    return this.http.get('https://apis.rfpgurus.com/super/pricing_images/');
}
    // this.isright,this.model.cardNumber, this.model.expirationdate,this.model.cardcod,this.var_get_id,this.data.course_id,this.model.cardtype,this.model.holdername,this.pkg_detail['type'],this.pkg_detail['dur']
    package_free(isright, cardNumber, expirationdate, cardcod, var_get_id, cardtype, holdername, pkg_type, pkg_dur,) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');     
        headers.append('Authorization', 'JWT ' + JSON.parse(localStorage.getItem('currentUser')).token);
        return this._https.post("https://apis.influexpai.com/payment/subscription_activation/",
            JSON.stringify({
                "id": cardNumber,
                "pricepackage": pkg_type,
                "duration": pkg_dur,
                
            }), { headers: headers }).map((data: Response) => data.json());
        
    }
    zipcode(zip) {
   
        return this.http.get('https://apis.rfpgurus.com/zipcode/' + zip + '/').map((response: Response) => response.json());
      }
    addCard( name, address, zip, city, state, country, cardno, ccv, expiryDate, var_type_atm, setautopay, nickname) {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', 'JWT ' + JSON.parse(localStorage.getItem('currentUser')).token);
          return this._https.post('https://apis.influexpai.com/payment/cardinfo/',
          JSON.stringify({
            "name": name,
            "street_address": address,
            "zipcode": zip,
            "city": city,
            "state": state,
            "country": country,
            "number": cardno,
            "cvc": ccv,
            "expDate": expiryDate,
            "card_type": var_type_atm,
            "autopay": setautopay,
            "nickname": nickname
          }),{headers:headers}).map(response => response.json())
          // .map((res: Response) => {
          //   if (res) {
          //     if (res.status === 201 || res.status === 200 || res.status === 302 ) {
          //       const responce_data = res.json();
          //       return responce_data;
          //     }
          //   }
          // })
          // .catch((error: any) => {
          //   if (error.status === 302) {
          //     swal({
          //       type: 'error',
          //       title: error.message,
          //       showConfirmButton: false,
          //       timer: 1500, width: '512px',
          //     })
          //     return Observable.throw(new Error(error.status));
          //   } else if (error.status === 405) {
          //     swal({
          //       type: 'error',
          //       title: error.message,
          //       showConfirmButton: false,
          //       timer: 1500, width: '512px',
          //     })
          //     return Observable.throw(new Error(error.status));
          //   }
          //   else if (error.status === 406) {
          //     swal({
          //       type: 'error',
          //       title: error.message,
          //       showConfirmButton: false,
          //       timer: 1500, width: '512px',
          //     })
          //     return Observable.throw(new Error(error.status));
          //   } else if (error.status === 403) {
          //     swal({
          //       type: 'error',
          //       title: error.message,
          //       showConfirmButton: false,
          //       timer: 1500, width: '512px',
          //     })
          //     return Observable.throw(new Error(error.status));
          //   }
          //   else if (error.status === 400) {
          //     swal({
          //       type: 'error',
          //       title: 'Bad Request',
          //       showConfirmButton: false,
          //       timer: 1500, width: '512px',
          //     })
          //     return Observable.throw(new Error(error.status));
          //   }
          // });
      }
      subcribe(email: string) {
        return this.http.post('https://apis.influexpai.com/newsletteremail/',
         { 'email': email, })
    }
    package_free_trial(isright, cardNumber, expirationdate, cardcod, var_get_id, cardtype, holdername, pkg_type, pkg_dur) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');     
        headers.append('Authorization', 'JWT ' + JSON.parse(localStorage.getItem('currentUser')).token);
        return this._https.post("https://apis.influexpai.com/payment/free_Trail/",
            JSON.stringify({
                "package_detail": pkg_type,
                "card_info": cardNumber,
               
            }),{ headers: headers }).map((res: Response) => {
                if (res.status == 200) {
                    swal(
                        'Your payment is posted successfully',
                        '',
                        'success'
                    )
                    res.json();
                }
            })
    }

    updateCard(var_status, id, name, cardno, ccv, expiryDate, address, zip, city, state, country, set_auto_pay) {
        return this.http.put('https://apis.com/payment/cardinfo/',
            JSON.stringify({
                // "cardNumber": cardno,
                "default": var_status,
                "cid": id,
                "name": name,
                // "pinCode": pin,
                "street_address": address,
                "zipcode": zip,
                "city": city,
                "state": state,
                "country": country,
                "number": cardno,
                "cvc": ccv,
                "expDate": expiryDate,
                "autopay": set_auto_pay
            }), { });
    }
}
