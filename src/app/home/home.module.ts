import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { HomeProjectComponent } from './home-project/home-project.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// module for the home page. Section that is displayed when entering the application and shows the list of saved projects and the option to create a new project

@NgModule({
  declarations: [
    HomePageComponent,
    HomeProjectComponent,
  
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }

