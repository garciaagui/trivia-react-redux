import React from 'react';
import PropTypes from 'prop-types';

class InputIcon extends React.Component {
  render() {
    const { icon } = this.props;
    return (
      <span className="input-group-text">
        <i className={ `fa-solid fa-${icon} text-info` } />
      </span>
    );
  }
}

InputIcon.propTypes = {
  icon: PropTypes.string,
}.isRequired;

export default InputIcon;
