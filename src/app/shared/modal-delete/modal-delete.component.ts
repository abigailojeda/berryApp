import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {
  @Input() modalSubject:any;
  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeDeleteModal(){
    this.event.emit()
  }


}
