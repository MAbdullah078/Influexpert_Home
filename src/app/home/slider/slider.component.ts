import { Component, OnInit } from '@angular/core';
// import { NgxCarousel } from 'ngx-carousel';
import 'rxjs/add/operator/map';
declare const $: any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }
  // public carouselOne: NgxCarousel;
  ngOnInit() {
    this.loadScript('./assets/js/playbtn.js');
    // this.carouselOne = {
    //   grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
    //   slide: 1,
    //   speed: 400,
    //   interval: 4000,
    //   point: {
    //     visible: false
    //   },
    //   load: 2,
    //   touch: true,
    //   loop: true,
    //   custom: 'banner'
    // }


    $('.social-logo').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      prevArrow : ' <button class="leftRsBanner"></button>',
      nextArrow : ' <button class="rightRsBanner"><i class="fa fa-angle-right"></i></button>',
      autoplay: true,
    });



      $('.center-slic-app').slick({
          
          infinite: true,
          slidesToShow: 6,
          arrows: true,
          prevArrow : ' <button class="leftRsBanner"></button>',
          nextArrow : ' <button class="rightRsBanner"></button>',
          autoplay: false,
          autoplaySpeed: 2000,
          responsive: [
              {
                  breakpoint: 775,
                  settings: {
                      arrows: false,
                      slidesToShow: 3
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      arrows: false,
                      slidesToShow: 1
                  }
              }
          ]
      });

  }
  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }
  public loadScript(url) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }


}
