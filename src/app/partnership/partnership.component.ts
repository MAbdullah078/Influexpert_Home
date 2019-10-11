import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from "@angular/forms";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const NAME_REGEX = /^[a-zA-Z _.]+$/;
const PHONE_REGEX = /^[0-9]+$/;

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.css']
})
export class PartnershipComponent implements OnInit {
  username;
  password;
  public model: any = {};
  public Contacts:any;
  loaded = false;
  lat: number = 31.514538;
  lng: number = 74.34482;

  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(NAME_REGEX)
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
  ]);

  companyFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(NAME_REGEX)
  ]);

  constructor() { }

  ngOnInit() {

  }

}
