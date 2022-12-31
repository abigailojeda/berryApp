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
  public categories = [
    {name:"categoryyyy",
     tasks : [
      {
        task_title :'task 1',
        task_description:'lorem fcndspfvspf vlnsgvbowpgew vwsovhngwpogv vjwsogv`nwogn',
        task_objectives : [
          {objective_text : 'lkvdfgjfdgbdfg',
           objective_done:true
          },
          {objective_text : 'dfdfdf',
           objective_done:false
          },
          {objective_text : 'dfddasdasdadfdf',
           objective_done:false
          },
          {objective_text : 'lkvdfgjfdgbdfg',
          objective_done:true
         },
         {objective_text : 'dfdfdf',
          objective_done:false
         },
         {objective_text : 'dfddasdasdadfdf',
          objective_done:false
         },
         {objective_text : 'lkvdfgjfdgbdfg',
         objective_done:true
        },
        {objective_text : 'dfdfdf',
         objective_done:false
        },
        {objective_text : 'dfddasdasdadfdf',
         objective_done:false
        },
        {objective_text : 'lkvdfgjfdgbdfg',
        objective_done:true
       },
       {objective_text : 'dfdfdf',
        objective_done:false
       },
       {objective_text : 'dfddasdasdadfdf',
        objective_done:false
       },
       {objective_text : 'lkvdfgjfdgbdfg',
       objective_done:true
      },
      {objective_text : 'dfdfdf',
       objective_done:false
      },
      {objective_text : 'dfddasdasdadfdf',
       objective_done:false
      },
      {objective_text : 'lkvdfgjfdgbdfg',
      objective_done:true
     },
     {objective_text : 'dfdfdf',
      objective_done:false
     },
     {objective_text : 'dfddasdasdadfdf',
      objective_done:false
     },
     {objective_text : 'lkvdfgjfdgbdfg',
     objective_done:true
    },
    {objective_text : 'dfdfdf',
     objective_done:false
    },
    {objective_text : 'dfddasdasdadfdf',
     objective_done:false
    },
    {objective_text : 'lkvdfgjfdgbdfg',
    objective_done:true
   },
   {objective_text : 'dfdfdf',
    objective_done:false
   },
   {objective_text : 'dfddasdasdadfdf',
    objective_done:false
   }
        ],

        task_tags: [
          {
            tag_text : 'dvnsdv',
            tag_color: 1
          },
          {
            tag_text : 'aadsd',
            tag_color: 2
          },
          {
            tag_text : 'asdgdgdhffdh',
            tag_color: 6
          }, {
            tag_text : 'dvnsdv',
            tag_color: 1
          },
          {
            tag_text : 'aadsd',
            tag_color: 2
          },
          {
            tag_text : 'asdgdgdhffdh',
            tag_color: 6
          },
          {
            tag_text : 'dvnsdv',
            tag_color: 1
          },
          {
            tag_text : 'aadsd',
            tag_color: 2
          },
          {
            tag_text : 'asdgdgdhffdh',
            tag_color: 6
          },
          {
            tag_text : 'dvnsdv',
            tag_color: 1
          },
          {
            tag_text : 'aadsd',
            tag_color: 2
          },
          {
            tag_text : 'asdgdgdhffdh',
            tag_color: 6
          },
          {
            tag_text : 'dvnsdv',
            tag_color: 1
          },
          {
            tag_text : 'aadsd',
            tag_color: 2
          },
          {
            tag_text : 'asdgdgdhffdh',
            tag_color: 6
          },
          {
            tag_text : 'dvnsdv',
            tag_color: 1
          },
          {
            tag_text : 'aadsd',
            tag_color: 2
          },
          {
            tag_text : 'asdgdgdhffdh',
            tag_color: 6
          },
          {
            tag_text : 'dvnsdv',
            tag_color: 1
          },
          {
            tag_text : 'aadsd',
            tag_color: 2
          },
          {
            tag_text : 'asdgdgdhffdh',
            tag_color: 6
          },
          {
            tag_text : 'dvnsdv',
            tag_color: 1
          },
          {
            tag_text : 'aadsd',
            tag_color: 2
          },
          {
            tag_text : 'asdgdgdhffdh',
            tag_color: 6
          }
        ]
      },
      {
        task_title :'task 2',
        task_description:'lorem fcndspfvspf vlnsgvbowpgew vwsovhngwpogv vjwsogv`nwogn',
        task_objectives : [
          {objective_text : 'lkvdfgjfdgbdfg',
           objective_done:true
          },
          {objective_text : 'dfdfdf',
           objective_done:false
          },
          {objective_text : 'dfddasdasdadfdf',
           objective_done:false
          }
        ],

        task_tags: [
          {
            tag_text : 'dvnsdv',
            tag_color: 1
          },
          {
            tag_text : 'aadsd',
            tag_color: 2
          },
          {
            tag_text : 'dvnsdv',
            tag_color: 3
          },
          {
            tag_text : 'aadsd',
            tag_color: 4
          },
          {
            tag_text : 'asdgdgdhffdh',
            tag_color: 6
          }
        ]
      }
     ]  
  },
  {name:"ljfbsf",
  tasks : [
   {
     task_title :'task 3',
     task_description:'lorem fcndspfvspf vlnsgvbowpgew vwsovhngwpogv vjwsogv`nwogn',
     task_objectives : [
       {objective_text : 'lkvdfgjfdgbdfg',
        objective_done:true
       },
       {objective_text : 'dfdfdf',
        objective_done:false
       },
       {objective_text : 'dfddasdasdadfdf',
        objective_done:false
       }
     ],

     task_tags: [
       {
         tag_text : 'dvnsdv',
         tag_color: 1
       },
       {
         tag_text : 'aadsd',
         tag_color: 2
       }
     ]
   },
   {
     task_title :'task 1',
     task_description:'lorem fcndspfvspf vlnsgvbowpgew vwsovhngwpogv vjwsogv`nwogn',
     task_objectives : [
       {objective_text : 'lkvdfgjfdgbdfg',
        objective_done:true
       },
       {objective_text : 'dfdfdf',
        objective_done:false
       },
       {objective_text : 'dfddasdasdadfdf',
        objective_done:false
       }
     ],

     task_tags: [
       {
         tag_text : 'dvnsdv',
         tag_color: 1
       },
       {
         tag_text : 'aadsd',
         tag_color: 2
       }
     ]
   },
   {
     task_title :'task 5',
     task_description:'lorem fcndspfvspf vlnsgvbowpgew vwsovhngwpogv vjwsogv`nwogn',
     task_objectives : [
       {objective_text : 'lkvdfgjfdgbdfg',
        objective_done:true
       },
       {objective_text : 'dfdfdf',
        objective_done:false
       },
       {objective_text : 'dfddasdasdadfdf',
        objective_done:false
       }
     ],

     task_tags: [
       {
         tag_text : 'dvnsdv',
         tag_color: 1
       },
       {
         tag_text : 'aadsd',
         tag_color: 2
       }
     ]
   },
   {
    task_title :'task 1',
    task_description:'lorem fcndspfvspf vlnsgvbowpgew vwsovhngwpogv vjwsogv`nwogn',
    task_objectives : [
      {objective_text : 'lkvdfgjfdgbdfg',
       objective_done:true
      },
      {objective_text : 'dfdfdf',
       objective_done:false
      },
      {objective_text : 'dfddasdasdadfdf',
       objective_done:false
      }
    ],

    task_tags: [
      {
        tag_text : 'dvnsdv',
        tag_color: 2
      },
      {
        tag_text : 'aadsd',
        tag_color: 5
      },
      {
        tag_text : 'dvnsdv',
        tag_color: 3
      },
      {
        tag_text : 'aadsd',
        tag_color: 1
      },
      {
        tag_text : 'asdgdgdhffdh',
        tag_color: 6
      }
    ]
  },
  {
    task_title :'task 1',
    task_description:'lorem fcndspfvspf vlnsgvbowpgew vwsovhngwpogv vjwsogv`nwogn',
    task_objectives : [
      {objective_text : 'lkvdfgjfdgbdfg',
       objective_done:true
      },
      {objective_text : 'dfdfdf',
       objective_done:false
      },
      {objective_text : 'dfddasdasdadfdf',
       objective_done:false
      }
    ],

    task_tags: [
      {
        tag_text : 'dvnsdv',
        tag_color: 1
      },
      {
        tag_text : 'aadsd',
        tag_color: 2
      }
    ]
  },
  {
    task_title :'task 1',
    task_description:'lorem fcndspfvspf vlnsgvbowpgew vwsovhngwpogv vjwsogv`nwogn',
    task_objectives : [
      {objective_text : 'lkvdfgjfdgbdfg',
       objective_done:true
      },
      {objective_text : 'dfdfdf',
       objective_done:false
      },
      {objective_text : 'dfddasdasdadfdf',
       objective_done:false
      }
    ],

    task_tags: [
      {
        tag_text : 'dvnsdv',
        tag_color: 1
      },
      {
        tag_text : 'aadsd',
        tag_color: 2
      }
    ]
  }
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
