import * as React from "react";

import AutoScroll from "./auto-scroll";

export default class DemoAutoScroll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldScroll: false
    };
  }

  componentDidMount() {
    this.setState({ shouldScroll: true });
  }

  render() {
    const { shouldScroll } = this.state;
    return (
      <div className="demo1">
        {shouldScroll && (
          <AutoScroll
            delay={500}
            mounted={() => this.setState({ shouldScroll: false })}
          />
        )}
        <p>
          This component will auto-scroll to itself using the helper component.
        </p>
      </div>
    );
  }
}
