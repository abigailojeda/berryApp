import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  public showAddModal = false;
  public showTaskModal = false;
  public modalSubject='';
  public taskSelected:any;

  public projectName='dddd'
  public categories = [

  {name:"",
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

  constructor() { }


//method to hide or show the different modes, 
// changing the value of the corresponding boolean 
// depending on the received parameter
 toggleModal(option:string, taskSelected?:any){
    
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


}
