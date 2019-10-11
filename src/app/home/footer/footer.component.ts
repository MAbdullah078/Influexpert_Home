import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
import has = Reflect.has;
import {AppService} from '../../app.service';
import {promise} from 'selenium-webdriver';
import {reject} from 'q';
import set = Reflect.set;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
    providers:[AppService]
})
export class FooterComponent implements OnInit {

    constructor(private obj: AppService) {
    }

    ngOnInit() {
    }

    scrollTop() {
        window.scrollTo(0, 0);
    }


}
