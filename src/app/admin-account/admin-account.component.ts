import {Component, ViewChild, OnInit, OnDestroy, HostListener} from '@angular/core';
import {AlertService} from '../services/alert.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-admin-account',
    templateUrl: './admin-account.component.html',
    styleUrls: ['./admin-account.component.css'],
    providers: [AlertService]
})

export class AdminAccountComponent implements OnInit {
    constructor(private  router: Router){

    }
    ngOnInit(){}
}