import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectsEmptyComponent } from './projects-empty/projects-empty.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProjectComponent,
    ProjectsEmptyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ProjectsEmptyComponent
  ]
})
export class ProjectsModule { }
