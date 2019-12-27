import React from "react";
import PropTypes from "prop-types";

class Fetch extends React.Component {
  state = {
    data: "",
    error: "",
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true }, () => this.fetchData());
  }
  async fetchData() {
    try {
      let result = await fetch(this.props.url);
      let data = await result.json();
      this.setState({ data, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }
  render() {
    const { data, loading, error } = this.state;
    if (loading) return this.props.loading;
    if (error) return this.props.error(error);
    if (data) return this.props.render(data);
    return null;
  }
}

Fetch.propTypes = {};

export default Fetch;
