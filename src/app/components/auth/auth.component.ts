import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  ssoLink: any;
  redirectUri: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient
  ) {
    this.ssoLink = document.createElement('a');
    this.redirectUri = window.location.origin;
  }

  ngOnInit(): void {
    // Softwright Single Sign-On Integration
    // User is redirected to this page after login, so 
    // check if token is present in query params and save it.
    this.route.queryParams.subscribe(params => {
      if ('token' in params) {
        this.verify(params['token'])
          .then(data => {
            console.log(data);
            localStorage.setItem('sf-token', params['token']);
            this.router.navigate(['app'])
          })
          .catch(e => console.error(e));
      } else {
        const token = localStorage.getItem('sf-token');
        if (token && token !== '') {
          this.verify(token)
            .then(data => {
              console.log(data);
              this.router.navigate(['app'])
            })
            .catch(e => console.error(e));
        }
      }
    });
  }

  verify(token: any): Promise<any> {
    return this.httpClient.get(environment.singleSignOn + '/verify?redirectUri=' + this.redirectUri,
      {
        headers: { 'Authorization': 'Bearer ' + token },
        responseType: 'text'
      }).toPromise();
  }

  // redirect to Softwright Single Sign-On Login
  login(): void {
    this.ssoLink.href = environment.singleSignOn + '/login' + '?redirectUri=' + this.redirectUri;
    this.ssoLink.click();
  }

  // redirect to SSO Signup
  register(): void {
    this.ssoLink.href = environment.singleSignOn + '/signup' + '?redirectUri=' + this.redirectUri;
    this.ssoLink.click();
  }
}
