import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Components/Header';

class Feedback extends React.Component {
  feedbackText = () => {
    const { assertions } = this.props;
    const msg = 3;
    if (assertions < msg) {
      return 'Could be better...';
    }
    return 'Well Done!';
  };

  render() {
    return (
      <div>
        <Header />
        <p data-testid="feedback-text">{this.feedbackText()}</p>
      </div>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number,
}.isRequired;

const mapStateToProps = ({ player }) => ({
  assertions: player.assertions,
});

export default connect(mapStateToProps)(Feedback);
