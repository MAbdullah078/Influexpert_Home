import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const header = $('#header');
    $(window).on("scroll", function() {
      $(window).scrollTop() >= 170 ? header.addClass("fixed") : header.removeClass("fixed");
    });
  }

}
