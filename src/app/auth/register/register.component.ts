import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(
    private router:Router,
    public formBuilder: FormBuilder,
    private authService: AuthService
    ) { 
      this.registerForm =this.formBuilder.group({});
    }

  public logoPale:string = '';
  public logoShort:string = '';
  public passStyle:string='fill: #66636F';
  public passControlStyle:string='fill: #66636F';
  public showPass:boolean=false;
  public showPassControl:boolean=false;


  ngOnInit(): void {
    this.logoPale = 'assets/img/logo/BerryLogoPale.svg';
    this.logoShort = 'assets/img/logo/BerryLogoColorShort.svg';
    this.registerForm = this.formBuilder.group({
      username: [''],
      controlPassword: [''],
      password: ['']
    });
  }

  public register(){
    //this.router.navigate(['/home'])
    console.log('register: ', this.registerForm.value)
    let user: User = {
      id: null!,
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
  
    };

    //create new user on user model
    this.authService.register(user).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }

  public tooglePass(){
    this.showPass = !this.showPass;
    !this.showPass ? this.passStyle='fill: #66636F;' : this.passStyle='fill: #d9d9d9;'
  }
  public toogleControlPass(){
    this.showPassControl = !this.showPassControl;
    !this.showPassControl ? this.passControlStyle='fill: #66636F;' : this.passControlStyle='fill: #d9d9d9;'
  }


}
