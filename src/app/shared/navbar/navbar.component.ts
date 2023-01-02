import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  
  constructor(private router:Router) { }

  public logo:string = '';
  public user = 'juan'

  ngOnInit(): void {
    this.logo = 'assets/img/logo/logoBerryWhite.svg';
  }

  logout(){
    this.router.navigate(['/login'])
  }


}
