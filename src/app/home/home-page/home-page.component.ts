import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public projects: any = []
  public showAddModal:boolean = false;
  public showDeleteModal:boolean = false;
  public user_id:string = '';
  public projectSelectedId:string = '';

  constructor(
    private AuthService:AuthService,
    private ProjectService:ProjectService
  ) { }


  ngOnInit(): void {
    this.setUserId();
    this.getProjects();
  }

  //method to hide or show the different modes, 
  // changing the value of the corresponding boolean 
  // depending on the received parameter
 public toggleModal(option:string){
    
    switch(option){
      case 'open-add':
      this.showAddModal = true;
      break;

      case 'open-delete':
      this.showDeleteModal = true;
      break;

      case 'close-add':
      this.showAddModal = false;
      break;

      case 'close-delete':
      this.showDeleteModal = false;
      break;
    }
  }

  public setUserId(){
    this.user_id = (this.AuthService.user?.id)?.toString() || '';

  }

  public getProjects(){
    this.ProjectService.getProjects(this.user_id)
    .subscribe(projects =>{
      this.projects = projects;
    })
  }

  public createProject(project_name:string){

    let project: Project = {
      _id:null!,
      user_id:this.user_id,
      project_name : project_name,
      categories : []
    };

    this.ProjectService.createProject(project)
    .subscribe((project) =>{
      this.projects.push(project);
      this.getProjects()
    })

    
  
  }
  
  public selectProject(projectId:string){
    this.projectSelectedId = projectId;
  }

  public deleteProject(){
    this.ProjectService.deleteProject(this.projectSelectedId)
    .subscribe(res =>{
      this.getProjects();
    })

  }
}
