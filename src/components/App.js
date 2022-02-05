import React, { Component } from "react";
import emojipedia from "../emojipedia";
import "../styles.css";
import Entry from "./Entry";

export default class App extends Component {
  render() {
    console.log(emojipedia);
    return (
      <div>
        <h1>My Emoji Project</h1>
        <div>
          <Entry data={emojipedia} />
        </div>
      </div>
    );
  }
}
