import React from 'react';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
  render() {
    return (
      <>
        <h3 data-testid="ranking-title">Ranking</h3>
        <Link to="/" type="button" data-testid="btn-go-home">
          Go Home
        </Link>
      </>
    );
  }
}

export default Ranking;
