import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loginError:boolean = false;

  constructor(
    private router:Router,
    public formBuilder: FormBuilder,
    private authService: AuthService
    ) { 
      this.loginForm =this.formBuilder.group({});
    }

  public logoPale:string = '';
  public logoShort:string = '';
  public passStyle:string='fill: #66636F';
  public showPass:boolean=false;

  ngOnInit(): void {
    this.logoPale = 'assets/img/logo/BerryLogoPale.svg';
    this.logoShort = 'assets/img/logo/BerryLogoColorShort.svg';
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }
  public tooglePass(){
    this.showPass = !this.showPass;
    !this.showPass ? this.passStyle='fill: #66636F;' : this.passStyle='fill: #d9d9d9;'
  } 

  public login(){
  
    let user: User = {
      id: null!,
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    this.authService.login(user).subscribe((res)=>{
      if(!res.access_token) {
       this.loginError = !this.loginError
        return;
      }
      
      this.router.navigateByUrl('/home');
      this.loginForm.reset();
    }, err => {
      this.loginError = !this.loginError
    });
    this.router.navigate(['/register'])
  }


}
