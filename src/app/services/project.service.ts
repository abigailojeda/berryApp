import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private AUTH_SERVER_ADDRESS:  string  =  environment.baseUrl;

  constructor(
    private HttpClient:HttpClient
  ) { }

  public getProjects(user_id:string){
    const url = `${this.AUTH_SERVER_ADDRESS}/project/${user_id}`;
    return this.HttpClient.get(url)
  }

  public createProject(project:Project){
    const url = `${this.AUTH_SERVER_ADDRESS}/project`;
    return this.HttpClient.post(url, project);

  }

  public deleteProject(project_id:string){
    const url = `${this.AUTH_SERVER_ADDRESS}/project/${project_id}`;
    return this.HttpClient.delete(url);
  }
}
