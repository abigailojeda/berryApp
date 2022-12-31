import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.scss']
})
export class ModalTaskComponent {

  @Input() modalSubject:any;
  @Input() task:any;
  @Output() toogleModal = new EventEmitter<string>();
 
  public editionMode:boolean = false;
  public taskForm: FormGroup ;
  public addObjective : boolean = false;
  public addTag : boolean = false;

  constructor( 
    public formBuilder: FormBuilder,
    ) { 
    this.taskForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
     title: [this.task?.task_title],
     description: [this.task?.task_description],
     objectives: [this.task?.task_objectives],
     tags: [this.task?.task_tags],
   });
 
   console.log(this.taskForm.value)
   }

  updateTask(){
    console.log('updated: ',this.taskForm.value)
    this.editionMode=false;
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
}


