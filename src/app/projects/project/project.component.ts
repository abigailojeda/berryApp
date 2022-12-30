import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
