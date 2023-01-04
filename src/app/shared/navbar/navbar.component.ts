import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../auth/services/user.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public userName='';
  
  constructor(
    private router:Router,
    private AuthService:AuthService
    ) {
    
   }

  public logo:string = '';
  public user = 'juan'

  ngOnInit(): void {
    this.logo = 'assets/img/logo/logoBerryWhite.svg';
    this.setUserName()
  }

  logout(){
    this.AuthService.logout().then(() => {
      this.router.navigateByUrl("/login");
    });
  }

  setUserName(){
    let aux = JSON.parse(localStorage.getItem("user")!);
    this.userName = aux?.username;
    console.log('aqui ssñds: ',this.userName)
  }


}
