import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {HttpService} from './serv/http-service';
import swal from 'sweetalert2';
import {Config} from './config';
import { Observable } from 'rxjs';
// import { url } from 'inspector';


@Injectable()
export  class AppService{
    httpClient: any;
    currentUser: any;


    constructor(private  http: Http, private loaderHttp: HttpService){}

    contact_Us(name, email, phone, message) {
        return this.http.post('https://apis.influexpai.com/contact-us/',
        // return this.http.post('http://192.168.29.166:8000/contact-us/',

        {
                'name':name,
                'email' :email,
                'mobile_no': phone,
                'message' :message

            }).map((response: Response) => {
                console.log(response)
            });
    }
    // post_Request(price, name, email, phone, website, service) {
    //     return this.loaderHttp.post('https://apis.influexpai.com/request_marketing/',
    //         {
    //             'budget':price,
    //             'profile_name' :name,
    //             'email': email,
    //             'phone_no' :phone,
    //             'website' :website,
    //             'services' :service,

    //         }).map((response: Response) => {
    //             if(response.status==201){
    //                 swal('Your Request For Marketing Services has been Post','Please Wait our Admin will Contact You', 'success')

    //             }
    //             console.log(response)
    //         });
    // }


    // postFile(fileToUpload: File): Observable<boolean> {

    //     let headers = new Headers();

    //     const endpoint = 'https://storage.influexpai.com/test_hamza.php';
    //     const formData: FormData = new FormData();
    //     formData.append('fileKey', fileToUpload, fileToUpload.name);
    //     return this.httpClient
    //       .post(endpoint, formData, { headers: headers })
    //       .map(() => { return true; })
    //       .catch((e) => this.handleError(e));
    // }
    // handleError(e: any) {
    //     throw new Error("Method not implemented.");
    // }
      
    post_Request(title, category, description ,pictures, video, file, questions,offer_to_influencer,url) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            let headers = new Headers({'Authorization': 'JWT ' + this.currentUser.token});
             // return this.loaderHttp.post('https://apis.influexpai.com/bap/',
                return this.loaderHttp.post(Config.api +  'http://192.168.29.166:8000/bap/',
            {
                'title':title,
                'category' :[category],
                'description': description,
                'pictures' :[pictures],
                'video' :[video],
                'file' :[file],
                'questions' :[questions],
                'offer_to_influencer' :offer_to_influencer,
                'urlofproduct': url,
               },
               {headers: headers}).map((response: Response) => {
                if(response.status==202){
                    swal('Your Request For Marketing Services has been Post','Please Wait our Admin will Contact You', 'success')

                }
                console.log(response)
            });
    }


    login(username: string, password: string) {
        return this.loaderHttp.post(Config.api + '/adminpanel/admin-login/',
            {
                    'username': username,
                    'password': password
                })
            .map((res: Response) => {
                let admin = res.json();
                localStorage.setItem('currentAdmin', JSON.stringify(admin));
                if(res.status==500){
                    alert('error......')
                }
            });
    }

    get_pending_RFM(){
        return this.http.get(Config.api + '/adminpanel/pending_request/').map((response: Response) => response.json());
    }

    rejectRFM(id) {

        return this.http.post(Config.api + '/adminpanel/rfm-rejected/',
            {
                'id': id,
            }).map((res: Response) => res.json());
    }
    approved_RFM(id) {

        return this.http.post(Config.api + '/adminpanel/rfm-approved/',
            {
                'id': id,
            }).map((res: Response) => res.json());
    }

    get_approved_RFM(){
        return this.http.get(Config.api + '/adminpanel/rfm-approved-list/').map((response: Response) => response.json());

    }
    get_rejected_RFM(){
        return this.http.get(Config.api + '/adminpanel/rfm-rejected-list/').map((response: Response) => response.json());

    }
    get_All_Blog(){
        return this.http.get(Config.api + '/getallblog/').map((response: Response) => response.json());

    }
    get_pending_showCases(){
        return this.http.get(Config.api + '/showcase/showcase_pending_list/').map((response: Response) => response.json());
    }

    rejectShowcase(id) {

        return this.http.post(Config.api + '/showcase/showcase_approved/',
            {
                'id': id,
            }).map((res: Response) => res.json());
    }
    approved_Showcase(id) {

        return this.http.post(Config.api + '/showcase/showcase_approved/',
            {
                'id': id,
            }).map((res: Response) => res.json());
    }

    get_approved_Showcases(){
        return this.http.get(Config.api + '/showcase/showcase_approved_list/').map((response: Response) => response.json());

    }
    get_rejected_ShowCases(){
        return this.http.get(Config.api + '/showcase/showcase_approved_list/').map((response: Response) => response.json());

    }
    brand_Signup(username,firstname,lastname,email, password ){
        return this.loaderHttp.post(Config.api+ '/brand_signup/', {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }).map((response: Response) => {
            let user_signup = response.json();

            localStorage.setItem('currentUser_Signup', JSON.stringify(user_signup));
        });
    }

    get_Payment(cardholder,email,packge,amount, cardexpiration,cardcode, cardnumber, category ){
        return this.http.post(Config.api+ '/payment/', {
            cardholder: cardholder,
            email: email,
            package: packge,
            amount: amount,
            cardexpiration: cardexpiration,
            cardcode: cardcode,
            cardnumber: cardnumber,
            category: category,
        }).map((
            response: Response) => {
                let data= response.json();
            }
        );
    }

}
