import {Component, OnInit, OnDestroy} from '@angular/core';
import {AlertService} from '../services/alert.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl, NgForm} from '@angular/forms';
import {Config} from '../config';
import {AppService} from '../app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
    providers: [AlertService, AppService]
})

export class AdminComponent implements OnInit, OnDestroy{

    userFormControl = new FormControl('', [
        Validators.required, Validators.pattern('')
    ]);
    passwordFormControl = new FormControl('', [
        Validators.required]);
    constructor(public headflag: AlertService, private router: Router, private obj: AppService){

    }
    model: any= {};
    // username: any;
    // password: any;

    ngOnInit(){

    }
    ngOnDestroy(){
    }
        admin_login(){
        // console.log(__dirname("..."));
            this.obj.login(this.model.username, this.model.password).subscribe(data => {
                localStorage.setItem('adminUsername', this.model.username);
                localStorage.setItem('adminPassword', this.model.password);

                this.router.navigate(['/manage-rfm']);
                swal('You are Now loggedIn', '','success');
                // this.loaded = false;
            })
        }
}