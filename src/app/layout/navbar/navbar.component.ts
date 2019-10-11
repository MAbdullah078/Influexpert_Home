import { Component, OnInit, Renderer, ViewChild, ElementRef, Directive } from '@angular/core';
// import { ROUTES } from '../../sidebar/sidebar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Headers, Http, Response } from '@angular/http';
import swal from 'sweetalert2';

declare const $: any;
const misc: any = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};

 
@Component({
    selector: 'app-navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    private listTitles: any[];
   // location: Location;
   public massage;
    private nativeElement: Node;
    private toggleButton: any;
    private sidebarVisible: boolean;
    public customer;
    public username;
    public admin;
    @ViewChild('app-navbar-cmp') button: any;
    constructor(private route: ActivatedRoute,
        private location: Location, private router: Router, private http: Http,    
         private element: ElementRef  ) {

        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    
    ngOnInit() {
        // <script>
    }
    isMobileMenu() {
        if ($(window).width() < 991) {
            return false;
        }
        return true;
    };
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        // this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    getTitle() {
        let titlee: any = this.location.prepareExternalUrl(this.location.path());
        for (let i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            } else if (this.listTitles[i].type === "sub") {
                for (let j = 0; j < this.listTitles[i].children.length; j++) {
                    let subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        return 'Dashboard';
    }
    getPath() {
        return this.location.prepareExternalUrl(this.location.path());
    }

    logout(){
        this.router.navigate(['/admin']);
        swal('Your are logged out', '', 'error')
        localStorage.clear();
    }
    profile(){
        this.router.navigate(['/admin/profile']);
        swal('Profile', '', 'success');

    }
}
