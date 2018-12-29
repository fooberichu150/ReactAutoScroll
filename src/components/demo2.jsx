import * as React from "react";

import ScrollHelpers from "../helpers/scroll-helpers";

export default class DemoSelfScroll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldScroll: false
    };
  }

  componentDidMount() {
    this.setState({ shouldScroll: false }, () => {
      ScrollHelpers.scrollTo(this.refs.entry, 500);
    });
  }

  render() {
    return (
      <div className="demo2" ref="entry">
        <p>
          This component will auto-scroll to itself using the helper class
          directly.
        </p>
      </div>
    );
  }
}
