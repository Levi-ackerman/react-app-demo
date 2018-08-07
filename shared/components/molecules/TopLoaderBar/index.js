import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

export default class Loader extends React.Component {

  render() {
    return this.props.loading ?
      <div className="app-loader">
        <div className="app-loader__bar" />
        <div className="app-loader__loading" />
      </div> : null;
  }
}

