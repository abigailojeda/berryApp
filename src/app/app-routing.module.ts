import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './projects/project/project.component';
//import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'project/:id',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  
  {
    path: '**',
    redirectTo: 'user'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
