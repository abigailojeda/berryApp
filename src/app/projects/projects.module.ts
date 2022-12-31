import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectsEmptyComponent } from './projects-empty/projects-empty.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProjectComponent,
    ProjectsEmptyComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ProjectsEmptyComponent
  ]
})
export class ProjectsModule { }
