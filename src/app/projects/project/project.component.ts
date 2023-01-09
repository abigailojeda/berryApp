import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public showAddModal = false;
  public showTaskModal = false;
  public modalSubject='';
  public taskSelected:any;

  public projectName='dddd'
  public categories = [{name:"",
  tasks : [
   {
     task_title :'',
     task_description:'',
     task_objectives : [
       {objective_text : '',
        objective_done:true
       }
     ],

     task_tags: [
       {
         tag_text : '',
         tag_color: 0
       },
      
     ]
   },
  
  ]  
}]

  constructor(
    private activatedRoute: ActivatedRoute,
    private ProjectService:ProjectService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe( ({ id }) => this.getCategories(id) );
  }


//method to hide or show the different modes, 
// changing the value of the corresponding boolean 
// depending on the received parameter
 public toggleModal(option:string, taskSelected?:any){
    
    switch(option){
      case 'open-add-category':
      this.showAddModal = true;
      this.modalSubject = 'Category Name'
      break;

      case 'open-task':
      this.showTaskModal = true;
      this.taskSelected = taskSelected
      break;

      case 'open-add-task':
      this.showAddModal = true;
      this.modalSubject = 'Task Title'
      break;

      case 'close-add':
      this.showAddModal = false;
      break;

      case 'close-task':
      this.showTaskModal = false;
      break;

    }
  }

  public getCategories<Project>(id : string){
    this.ProjectService.getProjectById(id)
    .subscribe(project => {
      console.log('this is the project: ', project.categories)
      if(project?.categories!){
        console.log('vaciiio')
      }
    
    })
  }


}
