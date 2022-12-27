import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { ProjectComponent } from './projects/project/project.component';

const routes: Routes = [
  {
    path: '',
   component: MainComponent,
    pathMatch: 'full'
},
{
  path: 'project/:id',
  component: ProjectComponent
},
{
  path: '**',
  redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
