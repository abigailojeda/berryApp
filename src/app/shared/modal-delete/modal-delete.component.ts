import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent {
  @Input() modalSubject:any;
  @Output() toogleModal = new EventEmitter<string>();
  @Output() deleteProject = new EventEmitter<string>();

  constructor() { }

  //executes the EventEmitter with the method that shows or hides the modal
  toogleModalOutput(value:string){
    this.toogleModal.emit(value)
  }

  deleteProjectOutput(){
    this.deleteProject.emit()
  }

}
