import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectsEmptyComponent } from './projects-empty/projects-empty.component';



@NgModule({
  declarations: [
    ProjectComponent,
    ProjectsEmptyComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProjectsEmptyComponent
  ]
})
export class ProjectsModule { }
