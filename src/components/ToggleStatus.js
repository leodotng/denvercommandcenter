import React, { Component } from "react";
import { ToggleButton } from "primereact/togglebutton";

export default class ToggleStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked1: false,
      checked2: false,
    };
  }

  render() {
    return (
      <div>
        <div className="card">
          <h5>Basic</h5>
          <ToggleButton
            checked={this.state.checked1}
            onChange={(e) => this.setState({ checked1: e.value })}
            onIcon="pi pi-check"
            offIcon="pi pi-times"
          />

          <h5>Holding Out</h5>
          <ToggleButton
            checked={this.state.checked2}
            onChange={(e) => this.setState({ checked2: e.value })}
            onLabel="HOLDING OUT"
            offLabel="NOT HOLDING OUT"
            onIcon="pi pi-check"
            offIcon="pi pi-times"
            style={{ width: "10em" }}
          />
        </div>
      </div>
    );
  }
}
