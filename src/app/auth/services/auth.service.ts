import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { User } from '../interfaces/user';
import { AuthResponse } from '../interfaces/auth-response';
import { Observable } from 'rxjs';
import { tap } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER_ADDRESS:  string  =  'http://localhost:4000';

  constructor(
    private httpClient: HttpClient,
    private UserService: UserService
  ) { }

  private getOptions(user: User){
    let base64UserAndPassword = window.btoa(user.username + ":" + user.password);

    let basicAccess = 'Basic ' + base64UserAndPassword;

    let options = {
      headers: {
        'Authorization' : basicAccess,
        'Content-Type' : 'application/x-www-form-urlencoded',
      }
    };

    return options;
  }

  
  register(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/api/users/`, user, this.getOptions(user)).pipe(
      tap(async (res:  AuthResponse ) => {

        if (res.user) {
          await localStorage.setItem("token", res.access_token);
          await localStorage.setItem("user", JSON.stringify(res.user));
        }
      })

    );
  }

  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/api/users/signin`, null, this.getOptions(user)).pipe(
      tap(async (res: any) => {
        if (res.user) {
          this.UserService.setCurrentUser(res.user)
          await localStorage.setItem("token", res.access_token);
          await localStorage.setItem("user", JSON.stringify(res.user));
        }
      })
    );
  }


  async logout() {
     localStorage.removeItem('user');
     localStorage.removeItem("token");
    this.UserService.setCurrentUser({})
  }

}


