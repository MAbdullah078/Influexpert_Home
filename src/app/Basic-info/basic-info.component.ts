import {Component, ViewChild, OnInit, OnDestroy, HostListener} from '@angular/core';
import {AlertService} from '../services/alert.service';

@Component({
    selector: 'app-admin-basic-info',
    templateUrl: './basic-info.component.html',
    styleUrls: ['./basic-info.component.css'],
    providers: [AlertService]
})

export class BasicInfoComponent implements OnInit {

    adminUsername: string;
    adminPassword: string;

    ngOnInit(){

      this.adminUsername=  localStorage.getItem('adminUsername');
        this.adminPassword =localStorage.getItem('adminPassword');

    }

}