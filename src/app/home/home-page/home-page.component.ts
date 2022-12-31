import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public projects = ["hpig", "lhesoifes", "oldshnfphnf", "hpig", "lhesoifes", "oldshnfphnf", "hpig", "lhesoifes", "oldshnfphnf", "hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf"]
  public showAddModal:boolean = false;
  public showDeleteModal:boolean = false;
  constructor() { }

  //method to hide or show the different modes, 
  // changing the value of the corresponding boolean 
  // depending on the received parameter
  toggleModal(option:string){
    
    switch(option){
      case 'open-add':
      this.showAddModal = true;
      break;

      case 'open-delete':
      this.showDeleteModal = true;
      break;

      case 'close-add':
      this.showAddModal = false;
      break;

      case 'close-delete':
      this.showDeleteModal = false;
      break;
    }
  }
}
