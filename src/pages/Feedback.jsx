import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import {
  actionAddScore, actionCurrQuestion, actionAddAssertions,
} from '../redux/actions/index';

class Feedback extends React.Component {
  componentDidMount() {
    const { gravatarEmail, name, score } = this.props;
    const player = {
      gravatarEmail,
      name,
      score,
    };
    const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    ranking.push(player);
    localStorage.setItem('ranking', JSON.stringify(ranking));
  }

  feedbackText = () => {
    const { assertions } = this.props;
    const msg = 3;
    if (assertions < msg) {
      return 'Could be better...';
    }
    return 'Well Done!';
  };

  handlePlayAgain = () => {
    const { dispatch } = this.props;
    dispatch(actionAddScore(0));
    dispatch(actionCurrQuestion(0));
    dispatch(actionAddAssertions(0));
  };

  render() {
    const { score, assertions } = this.props;
    return (
      <div>
        <Header />
        <h3 data-testid="feedback-total-score">{ score }</h3>
        <h3 data-testid="feedback-total-question">{ assertions }</h3>
        <p data-testid="feedback-text">{this.feedbackText()}</p>
        <Link to="/" data-testid="btn-play-again" onClick={ this.handlePlayAgain }>
          Play Again
        </Link>
        <Link to="/ranking" data-testid="btn-ranking">
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
  name: player.name,
  gravatarEmail: player.gravatarEmail,
});

export default connect(mapStateToProps)(Feedback);
