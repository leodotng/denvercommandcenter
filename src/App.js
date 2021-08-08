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
import {InputSwitch} from 'primereact/inputswitch';
import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import logo from "./logo.png";

console.log(logo);



const header = (
  <img
    alt="Card"
    src="https://t4.ftcdn.net/jpg/02/76/08/07/360_F_276080724_hltnCyDjcqAyRtLzDYo3T2jXbBtCD7fl.jpg"
    height="75px"
    width="250px"
  />
);
const footer = (
  <span>
    <Button label="Save" icon="pi pi-check" style={{ marginRight: ".25em" }} />
    <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
  </span>
);

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
        label: "Cancellations",
        icon: "pi pi-fw pi-plus",
      },
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
        label: "Passdown",
        icon: "pi pi-fw pi-plus",
      },
      {
        label: "Chat",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Delete",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
      {
        label: "Settings",
        icon: "pi-cog",
      },
    ],
  },
];

function App() {
  
  return (
    <Router>
      <Menubar
        model={items}
        start={
          <>
            <img src={logo} alt="Logo" className="logo-size" />
          </>
        }
        end={
          <>
            <Button
              label="Settings"
              icon="pi pi-cog"
              style={{ marginRight: ".25em" }}
            />
            <Button label="Sign In" icon="pi pi-sign-in" />
          </>
        }
      />

      <div className="">
        <div class="flex align-items-center justify-content-center">
          <InputText
            placeholder="Quick Flight Search"
            type="text"
            style={{ marginRight: ".25em" }}
          />
          <Button
            label="Search"
            icon="pi pi-search"
            style={{ marginRight: ".25em" }}
          />
          <Link to="/gates" className="text-link">
            <Button
              onClick={notify}
              style={{ marginRight: ".25em" }}
              className="p-m-2"
            >
              Gates
            </Button>
          </Link>

          <Link to="/gateservices" className="text-link">
            <Button
              onClick={notify}
              style={{ marginRight: ".25em" }}
              className="p-m-2"
            >
              Gate Services
            </Button>
          </Link>
          <Link to="/gateservices" className="text-link">
            <Button
              onClick={notify}
              style={{ marginRight: ".25em" }}
              className="p-m-2"
            >
              Connections
            </Button>
          </Link>

          <Link to="/gateservices" className="text-link">
            <Button
              onClick={notify}
              style={{ marginRight: ".25em" }}
              className=""
            >
              IROPS
            </Button>
          </Link>
          <Link to="/Fueling" className="text-link">
            <Button
              onClick={notify}
              style={{ marginRight: ".25em" }}
              className="p-m-2"
            >
              Fueling
            </Button>
          </Link>
        </div>
        <div></div>
        <div></div>
        <div>
          <Card
            style={{ marginBottom: ".5em" }}
            footer={footer}
            header={header}
            title="Gates"
            subTitle="Gates Subtitle"
          >
            {/* <InputSwitch checked={value} onChange={(e) => setValue(e.value)} /> */}
          </Card>
          <Card
            style={{ marginBottom: ".5em" }}
            footer={footer}
            header={header}
          >
            Gate Services
          </Card>

          <Card style={{ marginBottom: ".5em" }}>Connections</Card>
          <Card style={{ marginBottom: ".5em" }}>IROPS</Card>
          <Card style={{ marginBottom: ".5em" }}>Fueling</Card>

          <Card style={{ marginBottom: ".5em" }}>Technology</Card>
          <Card style={{ marginBottom: ".5em" }}>Communication</Card>
        </div>

        <Toaster />

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
      </div>
    </Router>
  );
}

export default App;
