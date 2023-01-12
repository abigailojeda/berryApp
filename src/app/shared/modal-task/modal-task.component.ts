import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';
import { TaskObjectives } from '../../interfaces/taskObjective';
import { TaskTag } from '../../interfaces/taskTag';
import { Task } from '../../interfaces/task';
import { ProjectService } from '../../services/project.service';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.scss']
})
export class ModalTaskComponent {
  
  @Input() modalSubject:any;
  @Input() project:any;
  @Input() selectedCategory:any;
  @Input() task:any;
  @Output() toogleModal = new EventEmitter<string>();
 
  public editionMode:boolean = false;
  public taskForm: FormGroup ;
  public addObjective : boolean = false;
  public addTag : boolean = false;
  public objectivesArray:any;
  public newObjectiveText:string = ''
  public tagsArray:any;
  public newTagText:string = '';
  public defaultTagColor:number =1;
  public showDeleteModal:boolean = false;

  constructor( 
    public formBuilder: FormBuilder,
    private ProjectService:ProjectService
    ) { 
    this.taskForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
     title: [this.task?.task_title],
     description: [this.task?.task_description],
   });
 
   this.objectivesArray = this.task.objectives
   this.tagsArray = this.task.tags

  }

  //editionMode is a boolean that receives its value from the ngModel in the input with name='edition'
  //the ngIf directive is used in the html to display elements and apply styles when the editionMode = true
  //in addition, when the edit mode is active, it is necessary to hide the html elements used to add targets and tags
  setEditionMode(){
    this.addObjective = false;
    this.addTag=false;
  }

  //executes the EventEmitter with the method that shows or hides the modal
  toogleModalOutput(value:string){
    this.toogleModal.emit(value)
  }

  toggleShowAddElement(value:string){
    switch(value){
      case 'open-objective':
      this.addObjective = true;
      break;

      case 'open-tag':
      this.addTag = true;
      break;

      case 'close-objective':
      this.addObjective = false;
      break;

      case 'close-tag':
      this.addTag = false;


    }
  }

  //OBJECTIVES
  createObjective(){
    let objective:TaskObjectives = {
      objective_text : this.newObjectiveText,
      objective_done: false
    }

    if(this.newObjectiveText.trim()!=''){
      this.objectivesArray.push(objective)
      this.newObjectiveText = '';
    }
  }

  deleteObjective(objectiveSelected:TaskObjectives){
   
    this.objectivesArray = this.objectivesArray.filter((objective:Object) =>{
      return objective != objectiveSelected
    })

  }

  toggleObjetiveStatus(objectiveSelected:TaskObjectives){
    this.objectivesArray.map((objective:TaskObjectives)=>{

      if(objective == objectiveSelected){
        objective.objective_done = !objective.objective_done
      }
    })
  }

  //TAGS
  changeDefaultTagColor(value:number){
    this.defaultTagColor = value;
  }

  createTag(){
    let tag:TaskTag = {
      tag_text:this.newTagText,
      tag_color:this.defaultTagColor
    }

    if(this.newTagText.trim()!=''){
      this.tagsArray.push(tag)
      this.newTagText = '';
    }
  }

  updateTaskOnProject(){

    let updatedTask:Task ={
      task_title : this.taskForm.value.title,
      task_description: this.taskForm.value.description,
      objectives : this.objectivesArray,
      tags: this.tagsArray
    }

    //aux array to save updated task and change it on selected category
    let tasksAux:any = [];

  
      //find tag & update
      this.project.categories.map((category:Category, index:number)=>{
        if(category._id === this.selectedCategory){
        
         category?.task?.map((task:any)=>{
            if(task._id== this.task._id){
              tasksAux.push(updatedTask)
            }else{
              tasksAux.push(task)
            }
          })
  
          this.project.categories[index].task = tasksAux;
        }
      })

      //update project with task updated
      this.ProjectService.updateProjectById(this.project._id, this.project)
      .subscribe((project) =>{
        this.project = project;
       })

    this.editionMode=false;
  }



 

}


