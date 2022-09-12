import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    const { score, assertions } = this.props;
    return (
      <div>
        <Header />
        <h3 data-testid="feedback-total-score">{ score }</h3>
        <h3 data-testid="feedback-total-question">{ assertions }</h3>
        <p data-testid="feedback-text">{this.feedbackText()}</p>
        <Link to="/" type="button" data-testid="btn-play-again">
          Play Again
        </Link>
        <Link to="/ranking" type="button" data-testid="btn-ranking">
          Ranking
        </Link>
      </div>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number,
  score: PropTypes.number,
}.isRequired;

const mapStateToProps = ({ player }) => ({
  assertions: player.assertions,
  score: player.score,
});

export default connect(mapStateToProps)(Feedback);
