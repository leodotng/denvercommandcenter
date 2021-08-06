import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gates from "./components/Gates";
import GateServices from "./components/GateServices";
import CardData from "./components/CardData";
import { Card } from "primereact/card";
// import { Toast } from 'primereact/toast';
import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const notify = () => toast("Gate Change.");
const swap = () => toast("Aircraft Swap Happened!");

const items = [
  {
    label: "Gates",
    icon: "pi pi-fw pi-file",
    items: [
      {
        label: "Gate Changes",
        icon: "pi pi-fw pi-plus",
      },
      {
        label: "Aircraft Swaps",
        icon: "pi pi-fw pi-trash",
      },
      // {
      //   separator:true
      // },
      {
        label: "Tows",
        icon: "pi pi-fw pi-external-link",
      },
    ],
  },
  {
    label: "Gate Services",
    icon: "pi pi-fw pi-pencil",
    items: [
      {
        label: "Water/Lavs",
        icon: "pi pi-fw pi-align-left",
      },
      {
        label: "Provo",
        icon: "pi pi-fw pi-align-left",
      },
    ],
  },
  {
    label: "Connections",
    icon: "pi pi-fw pi-sort",
    items: [
      {
        label: "Delayed Inbounds",
        icon: "pi pi-fw pi-user-plus",
      },
      {
        label: "Hold No Hold",
        icon: "pi pi-fw pi-user-plus",
      },
      {
        label: "Misconnects",
        icon: "pi pi-fw pi-user-minus",
      },
      {
        label: "Delayed Flights",
        icon: "pi pi-fw pi-user-minus",
      },
      {
        label: "Search",
        icon: "pi pi-fw pi-users",
        items: [
          {
            label: "Filter",
            icon: "pi pi-fw pi-filter",
            items: [
              {
                label: "Print",
                icon: "pi pi-fw pi-print",
              },
            ],
          },
          {
            icon: "pi pi-fw pi-bars",
            label: "List",
          },
        ],
      },
    ],
  },
  {
    label: "IROPS",
    icon: "pi pi-fw pi-calendar",
    items: [
      {
        label: "Diversions",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Delayed Flights",
            icon: "pi pi-fw pi-calendar-plus",
          },
          {
            label: "De-icing Metering",
            icon: "pi pi-fw pi-calendar-minus",
          },
          {
            label: "Crew Scheduling",
            icon: "pi pi-fw pi-calendar-minus",
          },
          {
            label: "YTs/UM",
            icon: "pi pi-fw pi-calendar-minus",
          },
          {
            label: "Holdouts",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
    ],
  },
  {
    label: "Fueling",
    icon: "pi pi-fw pi-sort-up",
    items: [
      {
        label: "Uplifts",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Walk The Line",
            icon: "pi pi-fw pi-calendar-plus",
          },
        ],
      },
    ],
  },
  {
    label: "Technology",
    icon: "pi pi-fw pi-calendar",
    items: [
      {
        label: "Computers",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Save",
            icon: "pi pi-fw pi-calendar-plus",
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
      {
        label: "Jetbridges",
        icon: "pi pi-fw pi-calendar-times",
        items: [
          {
            label: "Remove",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
    ],
  },

  {
    label: "Communication",
    icon: "pi pi-fw pi-calendar",
    items: [
      {
        label: "Chat",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Passdown",
            icon: "pi pi-fw pi-calendar-plus",
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Menubar
          model={items}
          start={<InputText placeholder="Quick Flight Search" type="text" />}
          end={<Button label="Refresh" icon="pi pi-power-off" />}
        />
        <h2>Command Center Notifications</h2>
        <Link to="/gates">
        <button onClick={notify}>Gates</button>

        </Link>

        <Link to="/gateservices">
          <button onClick={notify}>Gate Services</button>
        </Link>

        <Link to="/gateservices">
          <button onClick={notify}>Gate Services</button>
        </Link>

        <Link to="/gateservices">
          <button onClick={notify}>Gate Services</button>
        </Link>

        <button onClick={swap}>Aircraft Swap</button>
    
        <Toaster />
     
        </div>
      <Switch>
        <Route path="/gatechanges">
          <Gates />
        </Route>
        <Route path="/gateservices">
          <GateServices />
        </Route>
        <Route path="/gateservices">
          <GateServices />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
