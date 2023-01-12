import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Category } from '../../interfaces/category';
import { Task } from '../../interfaces/task';
import { TaskObjectives } from '../../interfaces/taskObjective';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public showAddModal = false;
  public showTaskModal = false;
  public showDeleteModal:boolean = false;
  public modalSubject='';
  public taskSelected:any;
  public elementToDelete:string='';

  public projectName='dddd'
  public project:any;
  public selectedCategory:string='';
  public categories:any = [{category_name:"",
  tasks : [
   {
     task_title :'',
     task_description:'',
     objectives : [
       {objective_text : '',
        objective_done:true
       }
     ],

     tags: [
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

      case 'open-delete':
      this.showDeleteModal = true;
      break;

      case 'close-add':
      this.showAddModal = false;
      break;

      case 'close-task':
      this.showTaskModal = false;
      break;

      case 'close-delete':
      this.showDeleteModal = false;
      break;

    }
  }

//CRUD CATEGORIES:

  public getCategories(id : string){
    this.ProjectService.getProjectById(id)

    .subscribe(project => {
    
      this.project = project;

      if(project?.categories?.length!>0){
        this.categories = project.categories;
        
      } 
    
    })
  }

  public selectCategory(categoryId:string){
    this.selectedCategory = categoryId;
  }


  public updateProject(value:string){

  //CATEGORY
    if(this.modalSubject.includes('Category')){

      //create category
      let category:Category = {
        category_name:value,
        task:[]
      }

      //add category
      this.project.categories = [...this.project.categories, category];

      //update project with new category
      this.ProjectService.updateProjectById(this.project._id, this.project)
      .subscribe((project) =>{
        this.project = project;
        this.getCategories(this.project._id)

      })
    }

  //TASK
    else if(this.modalSubject.includes('Task')){

      //create task
      let task:Task  = {
        task_title:value,
        task_description:'',
        objectives:[],
        tags:[]
      }

      //add task
      this.project.categories.map((category:Category)=>{
        if(category._id === this.selectedCategory){
          category.task?.push(task);
        }
      })

      //update project with new task

      this.ProjectService.updateProjectById(this.project._id, this.project)
      .subscribe((project) =>{
        this.project = project;
        this.getCategories(this.project._id)

      })
    }
  }

  public selectElementToDelete(value:string, taskToSelect?:any){
    this.elementToDelete = value;

    if(taskToSelect){
      this.taskSelected = taskToSelect;
    }
  }


  public deleteElement(){

    console.log(this.elementToDelete)

  //DELETE CATEGORY
    if(this.elementToDelete === 'category'){
      this.project.categories = this.project.categories.filter((category:Category) => {
        return category._id != this.selectedCategory
      })
  
      this.ProjectService.updateProjectById(this.project._id, this.project)
      .subscribe((project) =>{
        this.project = project;
        this.getCategories(this.project._id)
  
      })
    }

  //DELETE TASK
    else if(this.elementToDelete === 'task'){
      
        //aux array to save updated task and change it on selected category
        let tasksAux:any = [];

        //find tag & filter to delete taskSelected
        this.project.categories.map((category:Category, index:number)=>{
          if(category._id === this.selectedCategory){
            console.log('yes')
           tasksAux = category?.task?.filter((task:Task) =>{
              return task._id != this.taskSelected._id;
            })
          
            this.project.categories[index].task = tasksAux;
          }
        })
      
        //update project with task deleted
        this.ProjectService.updateProjectById(this.project._id, this.project)
        .subscribe((project) =>{
          this.project = project;
          this.getCategories(this.project._id)
        })
    }
    
   
  }

//GET OBJECTIVES COUNTER

getObjectivesQuantity(objectives:TaskObjectives[]){
  let counter:number = 0;

  objectives.map(obj => {
    if(obj.objective_done){
      counter ++
    }
  })

  return counter;

}



}
