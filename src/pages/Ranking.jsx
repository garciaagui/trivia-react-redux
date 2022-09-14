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
      <div className="row justify-content-center align-items-center mt-3">
        <div
          className="col-11 col-md-6 col-lg-5 rounded-3 p-4 px-lg-5 shadow text-start"
          style={ { background: 'white' } }
        >
          <Link
            to="/"
            data-testid="btn-go-home"
            onClick={ this.handlePlayAgain }
            className="btn btn-md btn-info text-white my-2 mx-2"
          >
            Go Home
          </Link>
          <h2 className="text-center my-4">
            <i className="fa-solid fa-trophy me-2" style={ { color: '#f9ba18' } } />
            <span data-testid="ranking-title">Ranking</span>
          </h2>
          <ul className="list-group list-group-flush list-group-numbered">
            {
              ranking.map((element, index) => (
                <li
                  key={ index }
                  className={ `list-group-item d-flex ${index % 2 === 0 && 'bg-light'}` }
                >
                  <img
                    src={ `https://www.gravatar.com/avatar/${md5(element.gravatarEmail).toString()}` }
                    alt={ element.name }
                    className="img-fluid img-thumbnail mx-3"
                  />
                  <p className="mt-2">
                    Name: &nbsp;
                    <span data-testid={ `player-name-${index}` }>
                      { element.name }
                    </span>
                    <br />
                    Score: &nbsp;
                    <span data-testid={ `player-score-${index}` }>
                      { element.score }
                    </span>
                    <br />
                    Assertions: &nbsp;
                    <span>
                      { element.assertions }
                    </span>
                  </p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

Ranking.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Ranking);
