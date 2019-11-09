import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
import has = Reflect.has;
import {AppService} from '../../app.service';
import {promise} from 'selenium-webdriver';
import {reject} from 'q';
import set = Reflect.set;
import { Config } from '../../config';
import Swal from 'sweetalert2';
import { HttpService } from '../../services/http-service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
    providers:[AppService]
})
export class FooterComponent implements OnInit {
    email: any;

    constructor(private obj: AppService,private http: HttpService) {
    }

    ngOnInit() {
    }

    scrollTop() {
        window.scrollTo(0, 0);
    }
    
sub() {
    this.http.post(Config.api+'/newsletteremail/', {
      email: this.email
     }).subscribe((response: Response) => {
                 if(response.status==202){
                Swal('You will get alerts from our Newsletter')
  
            }
     });
    }
  
  }


