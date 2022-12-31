import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.scss']
})
export class ModalTaskComponent implements OnInit {

  @Input() modalSubject:any;
  @Input() task:any;
  @Output() event = new EventEmitter();

 
  public editionMode:boolean = false;
  public taskForm: FormGroup ;
  public addObjective : boolean = false;
  public addTag : boolean = false;

  constructor( public formBuilder: FormBuilder) { 
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
  
  closeTaskModal(){
    this.event.emit()
  }

  setEditionMode(){
    console.log('a veee: ', this.editionMode)
    this.addObjective = false;
    this.addTag=false;
  }

  updateTask(){
    console.log('updated: ',this.taskForm.value)
    this.editionMode=false;
  }

  public showAddElement(value:string){
    switch(value){
      case 'objective':
      this.addObjective = true;
      break;

      case 'tag':
      this.addTag = true;
    }
  }

  public hideAddElement(value:string){
    switch(value){
      case 'objective':
      this.addObjective = false;
      break;

      case 'tag':
      this.addTag = false;
    }
  
  
  
  }
}


