import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    ModalAddComponent,
    ModalDeleteComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    NavbarComponent,
    ModalAddComponent, 
    ModalDeleteComponent
  ]
})
export class SharedModule { }
