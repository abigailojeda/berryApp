import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeProjectEmptyComponent } from './home-project-empty/home-project-empty.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeProjectComponent } from './home-project/home-project.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

// module for the home page. Section that is displayed when entering the application and shows the list of saved projects and the option to create a new project

@NgModule({
  declarations: [
    HomeProjectEmptyComponent,
    HomePageComponent,
    HomeProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

