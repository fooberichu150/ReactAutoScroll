import * as React from "react";
import PropTypes from "prop-types";

import ScrollHelpers from "../helpers/scroll-helpers";
import { isNullOrUndefined } from "../helpers/object-utils";

export default class AutoScroll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldScroll: true
    };
  }

  componentDidMount() {
    if (this.state.shouldScroll === false) return;

    const { delay, mode } = this.props;

    if (mode === "self") {
      ScrollHelpers.scrollTo(this.refs.autoScroll, delay);
    } else {
      ScrollHelpers.scrollTop(delay);
    }

    setTimeout(() => {
      this.setState({ shouldScroll: false }, () => {
        if (!isNullOrUndefined(this.props.mounted)) this.props.mounted();
      });
    }, delay);
  }

  render() {
    return (
      <div>
        <div ref="autoScroll" />
      </div>
    );
  }
}

AutoScroll.propTypes = {
  delay: PropTypes.number,
  mode: PropTypes.oneOf(["self", "top"]),
  mounted: PropTypes.func
};

AutoScroll.defaultProps = {
  delay: null,
  mode: "self"
};
