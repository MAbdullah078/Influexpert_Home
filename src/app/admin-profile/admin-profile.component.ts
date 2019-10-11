import {Component, ViewChild, OnInit, OnDestroy, HostListener} from '@angular/core';
import {AlertService} from '../services/alert.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-admin-profle',
    templateUrl: './admin-profile.component.html',
    styleUrls: ['./admin-profile.component.css'],
    providers: [AlertService]
})

export class AdminProfileComponent implements OnInit {
constructor(private  router: Router){

}
    ngOnInit(){}
    open_page(){
        this.router.navigate(['/admin/profile'])
    }
    open_page2(){
        this.router.navigate(['/admin/profile/account'])
    }
    open_page3(){
        this.router.navigate(['/admin/profile/payment'])
    }

}