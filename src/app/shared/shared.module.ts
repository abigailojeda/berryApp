import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { AppRoutingModule } from '../app-routing.module';
import { ModalTaskComponent } from './modal-task/modal-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    ModalAddComponent,
    ModalDeleteComponent,
    ModalTaskComponent,
   
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NavbarComponent,
    ModalAddComponent, 
    ModalDeleteComponent,
    ModalTaskComponent,
  ]
})
export class SharedModule { }
