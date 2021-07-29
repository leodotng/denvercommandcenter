import React from 'react';
import { Menubar} from 'primereact/menubar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
// import { Toast } from 'primereact/toast';

import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const items = [
  {
    label:'Gate Changes',
    icon:'pi pi-fw pi-file',
    items:[
      {
        label:'Aircraft Swaps',
        icon:'pi pi-fw pi-plus',
        items:[
          {
            label:'Bookmark',
            icon:'pi pi-fw pi-bookmark'
          },
          {
            label:'Video',
            icon:'pi pi-fw pi-video'
          },

        ]
      },
      {
        label:'Potable Water/Lavs',
        icon:'pi pi-fw pi-trash'
      },
      {
        separator:true
      },
      {
        label:'Export',
        icon:'pi pi-fw pi-external-link'
      }
    ]
  },
  {
    label:'Potable Water/Lavs',
    icon:'pi pi-fw pi-pencil',
    items:[
      {
        label:'Left',
        icon:'pi pi-fw pi-align-left'
      },
      {
        label:'Right',
        icon:'pi pi-fw pi-align-right'
      },
      {
        label:'Center',
        icon:'pi pi-fw pi-align-center'
      },
      {
        label:'Justify',
        icon:'pi pi-fw pi-align-justify'
      },

    ]
  },
  {
    label:'Delayed Flights',
    icon:'pi pi-fw pi-sort',
    items:[
      {
        label:'New',
        icon:'pi pi-fw pi-user-plus',

      },
      {
        label:'Delete',
        icon:'pi pi-fw pi-user-minus',

      },
      {
        label:'Search',
        icon:'pi pi-fw pi-users',
        items:[
          {
            label:'Filter',
            icon:'pi pi-fw pi-filter',
            items:[
              {
                label:'Print',
                icon:'pi pi-fw pi-print'
              }
            ]
          },
          {
            icon:'pi pi-fw pi-bars',
            label:'List'
          }
        ]
      }
    ]
  },
  {
    label:'Holdouts',
    icon:'pi pi-fw pi-calendar',
    items:[
      {
        label:'Edit',
        icon:'pi pi-fw pi-pencil',
        items:[
          {
            label:'Save',
            icon:'pi pi-fw pi-calendar-plus'
          },
          {
            label:'Delete',
            icon:'pi pi-fw pi-calendar-minus'
          },

        ]
      },
      {
        label:'Archive',
        icon:'pi pi-fw pi-calendar-times',
        items:[
          {
            label:'Remove',
            icon:'pi pi-fw pi-calendar-minus'
          }
        ]
      }
    ]
  },
  {
    label:'Diversions',
    icon:'pi pi-fw pi-calendar',
    items:[
      {
        label:'Edit',
        icon:'pi pi-fw pi-pencil',
        items:[
          {
            label:'Save',
            icon:'pi pi-fw pi-calendar-plus'
          },
          {
            label:'Delete',
            icon:'pi pi-fw pi-calendar-minus'
          },

        ]
      },
      {
        label:'Archive',
        icon:'pi pi-fw pi-calendar-times',
        items:[
          {
            label:'Remove',
            icon:'pi pi-fw pi-calendar-minus'
          }
        ]
      }
    ]
  },
  {
    label:'Return to Gate',
    icon:'pi pi-fw pi-calendar',
    items:[
      {
        label:'Edit',
        icon:'pi pi-fw pi-pencil',
        items:[
          {
            label:'Save',
            icon:'pi pi-fw pi-calendar-plus'
          },
          {
            label:'Delete',
            icon:'pi pi-fw pi-calendar-minus'
          },

        ]
      },
      {
        label:'Archive',
        icon:'pi pi-fw pi-calendar-times',
        items:[
          {
            label:'Remove',
            icon:'pi pi-fw pi-calendar-minus'
          }
        ]
      }
    ]
  },
  {
    label:'Quit',
    icon:'pi pi-fw pi-power-off'
  }
];




function App() {
  return (
    <div className="App">
      <Menubar
          model={items}
          start={<InputText placeholder="Flight Search" type="text"/>}
          end={<Button label="Refresh" icon="pi pi-power-off"/>}
      />

      <h1>Denver Command Center Communications</h1>
    </div>
  );
}

export default App;
