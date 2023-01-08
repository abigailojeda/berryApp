import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { ProjectComponent } from './projects/project/project.component';
//import { HomePageComponent } from './home/home-page/home-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
     canLoad: [ AuthGuard ],
     canActivate: [ AuthGuard ]
  },
  {
    path: 'project/:id',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
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
