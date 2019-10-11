import {Component, ViewChild, OnInit, OnDestroy, HostListener} from '@angular/core';
import {AlertService} from '../services/alert.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-admin-account',
    templateUrl: './admin-payment.component.html',
    styleUrls: ['./admin-payment.component.css'],
    providers: [AlertService]
})

export class AdminPaymentComponent  implements OnInit {
    constructor(private  router: Router){

    }
    ngOnInit(){}
}