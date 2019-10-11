import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-influencers-detail',
  templateUrl: './influencers-detail.component.html',
  styleUrls: ['./influencers-detail.component.scss'],
    providers: [AlertService]
})
export class InfluencersDetailComponent implements OnInit {
  get_query_params;
  Profile: any= [];
    get_influencers_profiles: any = [];
inf_username;
    imageurls = 'https://apis.influexpai.com';
  constructor( private  routes: ActivatedRoute, private get_profile: AlertService) { }

  ngOnInit() {
    this.routes.queryParams.subscribe(params => {
      this.Profile = JSON.parse(params['Profile'] || '0');
    });

    console.log('Profile isssss:', this.Profile);
    // const username =  parseInt(this.routes.snapshot.queryParamMap.get('username'));
    // this.inf_username = username;

      this.get_profile.getTopInfluencers().subscribe(response => {
          this.get_influencers_profiles = response;

          // for (const itm of this.get_influencers_profiles) {
          //     this.influencers.push(itm.tag.split(','));
          //
          //     console.log('Tagsssssssssssssss', itm.tag);
          // }
          //
          // for (const items of this.get_influencers_profiles) {
          //     this.influencers.push(items.tag.split(','));
          //     console.log('Influencers Profiles are', this.influencers);
          //     console.log('Influencers Profiles are', items.tag);
          // }
      });
  }

}
