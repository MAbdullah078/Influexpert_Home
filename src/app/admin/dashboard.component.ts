import {Component, ViewChild, OnInit, OnDestroy, HostListener} from '@angular/core';
import {AlertService} from '../services/alert.service';
// import {Component, OnInit} from '@angular/core';
import {Config} from '../config';
// import {AlertService} from '../../services/alert.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [AlertService]
})

export class DashboardComponent implements OnInit {
    loginurl: string = "http://brand.influexpai.com/login";
    infurl: string = "http://influencer.influexpai.com/authentication/signin";
    loginsurl: string = 'http://www.influexpai.com/pricing';
    infsurl: string = "http://influencer.influexpai.com/authentication/signup";
    influencersppurl: string = 'https://influencer.influexpai.com/authentication/signin';
    brand_app_cat_url= 'https://brand.influexpai.com/dashboard';
    brand_app_fb_url = 'https://brand.influexpai.com/facebook/search';
    brand_app_insta_url = 'https://brand.influexpai.com/instagram/search';
    brand_app_twi_url = 'https://brand.influexpai.com/twitter/search';
    brand_app_blog_url = 'https://brand.influexpai.com/blogosphere/search';
    brand_app_yt_url = 'https://brand.influexpai.com/youtube/search';
    brand_app_ld_url = 'https://brand.influexpai.com/linkedin/search';
    brand_app_pt_url = 'https://brand.influexpai.com/pinterest/search';
      checkflag: any;
  
   ngOnInit(){}

}