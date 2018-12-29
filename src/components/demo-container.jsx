import * as React from "react";

import FillerContent from "./filler-content";
import Demo1 from "./demo1";
import Demo2 from "./demo2";

import ScrollHelpers from "../helpers/scroll-helpers";

export default class DemoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enableDemo1: false,
      enableDemo2: false
    };

    this.demo1Clicked = this.demo1Clicked.bind(this);
    this.demo2Clicked = this.demo2Clicked.bind(this);
    this.backToTopClicked = this.backToTopClicked.bind(this);
  }

  demo1Clicked() {
    this.setState({ enableDemo1: true, enableDemo2: false });
  }

  demo2Clicked() {
    this.setState({ enableDemo2: true, enableDemo1: false });
  }

  backToTopClicked() {
    ScrollHelpers.scrollTop(250);
  }

  render() {
    return (
      <div>
        <div>
          <div className="demo-box" onClick={this.demo1Clicked}>
            Click here to enable the scrollable demo w/component
          </div>
          <div className="demo-box" onClick={this.demo2Clicked}>
            Click here to enable the scrollable demo w/helper
          </div>
        </div>
        <FillerContent />
        {this.state.enableDemo1 && <Demo1 />}
        {this.state.enableDemo2 && <Demo2 />}
        <button type="button" onClick={this.backToTopClicked}>
          Back to top
        </button>
      </div>
    );
  }
}
