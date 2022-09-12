import React from 'react';
import Header from '../Components/Header';

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p data-testid="feedback-text"> qualquer coisa </p>
      </div>
    );
  }
}

export default Feedback;
