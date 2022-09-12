import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import {
  actionAddScore, actionCurrQuestion, actionAddAssertions,
} from '../redux/actions/index';

class Ranking extends React.Component {
  state = {
    ranking: [],
  };

  componentDidMount() {
    const rank = JSON.parse(localStorage.getItem('ranking'));
    rank.sort((a, b) => b.score - a.score);
    this.setState({ ranking: rank });
  }

  handlePlayAgain = () => {
    const { dispatch } = this.props;
    dispatch(actionAddScore(0));
    dispatch(actionCurrQuestion(0));
    dispatch(actionAddAssertions(0));
  };

  render() {
    const { ranking } = this.state;
    return (
      <>
        <h3 data-testid="ranking-title">Ranking</h3>
        <Link to="/" data-testid="btn-go-home" onClick={ this.handlePlayAgain }>
          Go Home
        </Link>
        <ul>
          {
            ranking.map((element, index) => (
              <li key={ index }>
                <img
                  src={ `https://www.gravatar.com/avatar/${md5(element.gravatarEmail).toString()}` }
                  alt={ element.name }
                />
                <p data-testid={ `player-name-${index}` }>{ element.name }</p>
                <p data-testid={ `player-score-${index}` }>{ element.score }</p>
              </li>
            ))
          }
        </ul>

      </>
    );
  }
}

Ranking.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Ranking);
