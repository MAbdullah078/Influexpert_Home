import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // name = 'Angular 5';
  users;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
    scrollTop() {
        if (isPlatformBrowser(this.platformId)) {
            window.scroll(0, 0);
        }
    }
  // resolved(e) {
  //   console.log(e)
  // }
  // constructor(private http: Http) {
  // }
  // //
  // getAll() {
  //   return this.http.get('http://127.0.0.1:8000/users/', this.jwt()).map((response: Response) => response.json());
  // }
  //
  // private jwt() {
  //   // create authorization header with jwt token
  //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   if (currentUser && currentUser.token) {
  //     const headers = new Headers({'Authorization': 'Bearer '
  // + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
  // .eyJvcmlnX2lhdCI6MTUwMTc0NjA3NCwiZXhwIjoxNTAxNzQ2Mzc0LCJlbWFpbCI6InVtYXIuYmlsYWx
  // AYnJhaW5wbG93LmNvbSIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoidW1hcmJpbGFsIn0
  // ._GhsMLTI07lFD81jZC56JV91E41tNoQT2M3LNb1Zegk'});
  //     return new RequestOptions({headers: headers});
  //   }
  // }

  // ngOnInit() {
  //    this.loadAllUsers();
  // }

  // private loadAllUsers() {
  //   this.getAll().subscribe(users => {
  //     this.users = users;
  //   });
  // }
}
