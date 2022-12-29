import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MainPageEmptyComponent } from './main-page-empty/main-page-empty.component';
import { ProjectComponent } from './project/project.component';



@NgModule({
  declarations: [
    MainComponent,
    MainPageEmptyComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainPageEmptyComponent
  ]
})
export class MainModule { }
