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
import { Panel } from "primereact/panel";
import { Dropdown } from 'primereact/dropdown';
import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import logo from "./logo.png";
import ToggleStatus from "./components/ToggleStatus";

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

const cities = [
  {label: 'Aircraft Maintenance', value: 'ACMX'},
  {label: 'Extended Holdout', value: 'HOLD'},
  {label: 'Gate Conflict', value: 'CONFLICT'},
  {label: 'Inbound Connections', value: 'CONX'},
  {label: 'OTHER', value: 'OTHER'}
];

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

      <div className="p-grid p-justify-center">
        <div class="flex align-items-center justify-content-center">
          <Link to="/" className="text-link">
            <Button
              onClick={notify}
              // style={{ marginRight: ".25em" }}
              className="p-m-2"
            >
              Home
            </Button>
          </Link>
          <Link to="/gates" className="text-link">
            <Button
              onClick={notify}
              // style={{ marginRight: ".25em" }}
              className="p-m-2"
            >
              Gates
            </Button>
          </Link>

          <Link to="/gateservices" className="text-link">
            <Button
              onClick={notify}
              // style={{ marginRight: ".25em" }}
              className="p-m-2"
            >
              Gate Services
            </Button>
          </Link>
          <Link to="/gateservices" className="text-link">
            <Button
              onClick={notify}
              // style={{ marginRight: ".25em" }}
              className="p-m-2"
            >
              Connections
            </Button>
          </Link>

          <Link to="/gateservices" className="text-link">
            <Button
              onClick={notify}
              // style={{ marginRight: ".25em" }}
              className="p-m-2"
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
        </div>
        <div></div>

        <div className=""><h1>Gate Changes</h1></div>

        {/* Card Beginning */}
        <div className="p-grid p-dir">
          <div className="p-col-12 p-md-6 p-lg-3">
            <Card style={{ marginBottom: ".5em" }} footer={footer}>
              <Panel header="Gates Changes">
                <p>
History of all gate changes                 
                </p>
                <span className="p-float-label">
                  Gate<br />
                <InputText id="Gate" label="Gate"/><br />
                City<br />
                <InputText id="Gate" label="Gate"/><br />
                Origin Gate<br />
                <InputText id="Gate" label="Gate"/><br />
                New Gate<br />
                <InputText id="Gate" label="Gate"/><br />
                Time<br />
                <InputText id="Gate" label="Gate"/><br />
                
                Reason<br />
                {/* <Dropdown options={this.cities} onChange={this.onCityChange} optionLabel="name" placeholder="Select a City" /> */}
                </span>

              </Panel>
            </Card>
          </div>
          <div className="p-col-12 p-md-6 p-lg-3">
            <Card style={{ marginBottom: ".5em" }} footer={footer}>
              <Panel header="Gate Services">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Panel>
            </Card>
          </div>
          <div className="p-col-12 p-md-6 p-lg-3">
            <Card style={{ marginBottom: ".5em" }}>
              <Panel header="Connections">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Panel>
            </Card>
          </div>
          <div className="p-col-12 p-md-6 p-lg-3">
            <Card style={{ marginBottom: ".5em" }}>
              <Panel header="IROPS">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  
                  <ToggleStatus />

                </p>
              </Panel>
            </Card>
          </div>
          <div className="p-col-12 p-md-6 p-lg-3">
            <Card style={{ marginBottom: ".5em" }}><Panel header="Fueling">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Panel></Card>
          </div>
          <div className="p-col-12 p-md-6 p-lg-3">
            <Card style={{ marginBottom: ".5em" }}><Panel header="Technology">
                <p>
                  C23
                </p>
              </Panel></Card>
          </div>
          <div className="p-col-12 p-md-6 p-lg-3">
            <Card style={{ marginBottom: ".5em" }}><Panel header="Communication">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Panel></Card>
          </div>
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
