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
      <>
        <Header />
        <div className="row justify-content-center align-items-center mt-3">
          <div
            className="col-11 col-md-6 col-lg-5 rounded-3 p-4 px-lg-5 shadow text-center"
            style={ { background: 'white' } }
          >
            <h3 className="my-3">
              Score: &nbsp;
              <span data-testid="feedback-total-score">
                { score }
              </span>
            </h3>
            <h3 className="my-3">
              Assertions: &nbsp;
              <span data-testid="feedback-total-question">{ assertions }</span>
            </h3>
            <h3
              className="my-3 alert alert-success"
              data-testid="feedback-text"
            >
              {this.feedbackText()}
            </h3>
            <Link
              to="/"
              data-testid="btn-play-again"
              onClick={ this.handlePlayAgain }
              className="btn btn-md btn-info text-white my-2 mx-2"
            >
              Play Again
            </Link>
            <Link
              to="/ranking"
              data-testid="btn-ranking"
              className="btn btn-md btn-secondary my-2 mx-2"
            >
              Ranking
            </Link>
          </div>
        </div>

      </>
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
