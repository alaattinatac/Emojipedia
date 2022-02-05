import React, { Component } from "react";

export default class Entry extends Component {
  render() {
   
    return (
      <div className="dictionary">
        {this.props.data.map((item, i) => {
          return (
            <div key={i} className="term">
              <div className="dt">
                <span className="emoji">{item.emoji}</span>
                <span>{item.name}</span>
              </div>
              <div className="dd">
                <span>{item.meaning}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
