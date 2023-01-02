import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  public logoPale:string = '';
  public logoShort:string = '';

  public isLogin:boolean = true;

  ngOnInit(): void {
    this.logoPale = 'assets/img/logo/BerryLogoPale.svg';
    this.logoShort = 'assets/img/logo/BerryLogoColorShort.svg';
  }

  login(){
    this.router.navigate(['/home'])
  }

}
