import React from "react";
import PropTypes from "prop-types";

class Fetch extends React.Component {
  state = {
    data: "",
    error: ""
  };

  async fetchData() {
    try {
      let result = await fetch(this.props.url);
      let data = await result.json();
      this.setState({ data, loading: false });
    } catch (error) {
      this.setState({ error });
    }
  }
  render() {
    if (loading) return this.props.loading;
    if (error) return this.props.error;
    return this.props.render;
  }
}

Fetch.propTypes = {};

export default Fetch;
