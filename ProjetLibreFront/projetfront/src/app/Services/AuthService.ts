import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Laboratoire } from '../models/laboratoire.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  //window :undefined;
  isAuthenticated: boolean = false;
  roles: any;
  username: any;
  accessToken!: any;

  public login(username: string, password: string) {
    let body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    let options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };

    return this.http.post(
      'http://localhost:8888/UTILISATEUR-SERVICE/auth/Login',
      body.toString(),
      options
    );
  }

  loadProfile(data: any): Observable<any> {
    this.isAuthenticated = true;
    this.accessToken = data['access-token'];
    let decodedJwt: any = jwtDecode(this.accessToken);
    //extract the role and userbame from Jwt
    this.roles = decodedJwt.scope;
    this.username = decodedJwt.sub;
    //store Jwt in Local Storage
    localStorage.setItem('jwt-token', this.accessToken);
    return of(this.roles);
  }

  loadTokenFromStorage() {
    let token = localStorage.getItem('jwt-token');
    if (token) {
      this.loadProfile({ 'access-token': token });
      //une fois on charge le token on va aller a cette route bch ila khraj/actualisa yrjaa nichn l page li deja kan fiha
      //d accueil si mknch deconnecta o token baqi matexpirach
      //this.router.navigateByUrl("/admin/");
    }
  }

  Logout() {
    this.isAuthenticated = false;
    this.accessToken = undefined;
    this.username = undefined;
    this.roles = undefined;
    //this.router.navigateByUrl('/login');
    //window.localStorage.removeItem("access-token");
    localStorage.removeItem('jwt-token');
  }
}

function jwtDecode(accessToken: any): any {
  throw new Error('Function not implemented.');
}
