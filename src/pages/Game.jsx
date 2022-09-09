import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Components/Header';

class Game extends React.Component {
  state = {
    answers: [],
    incorrectAnswers: [],
    correctAnswer: '',
    styleButton: false,
    contador: 30,
    isDisabled: false,
  };

  componentDidMount() {
    const { results } = this.props;
    this.setState({
      answers: [...results[0].incorrect_answers, results[0].correct_answer],
      incorrectAnswers: results[0].incorrect_answers,
      correctAnswer: results[0].correct_answer,
    });
    this.CountTimer();
  }

  CountTimer = () => {
    const oneSec = 1000;
    const timer = setInterval(() => {
      this.setState(
        (prevState) => ({
          contador: prevState.contador - 1,
        }),
        () => {
          const { contador } = this.state;
          if (contador === 0) {
            clearInterval(timer);
            this.setState({ isDisabled: true });
          }
        },
      );
    }, oneSec);
  };

  defineClassStyle = (answer) => {
    const { correctAnswer } = this.state;
    if (answer === correctAnswer) return 'correct-answer';
    return 'wrong-answer';
  };

  defineDataTestId = (answer) => {
    const { incorrectAnswers, correctAnswer } = this.state;
    if (answer === correctAnswer) return 'correct-answer';
    return `wrong-answer-${incorrectAnswers.indexOf(answer)}`;
  };

  render() {
    const { results } = this.props;
    const { answers, styleButton, contador, isDisabled } = this.state;
    const RANDOM_NUMBER = 0.5;
    return (
      <section>
        <Header />
        <h3>{contador}</h3>
        <h3 data-testid="question-category">
          {results[0].category}
        </h3>
        <h3 data-testid="question-text">
          {results[0].question}
        </h3>
        <div data-testid="answer-options">
          {answers.sort(() => Math.random() - RANDOM_NUMBER).map((answer) => (
            <button
              type="button"
              key={ answer }
              disabled={ isDisabled }
              data-testid={ this.defineDataTestId(answer) }
              className={ styleButton ? this.defineClassStyle(answer) : '' }
              onClick={ () => { this.setState({ styleButton: true }); } }
            >
              {answer}
            </button>
          ))}
        </div>
      </section>
    );
  }
}

Game.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
  })),
}.isRequired;

const mapStateToProps = ({ reducerQuestions: { questions: { results } } }) => ({
  results,
});

export default connect(mapStateToProps)(Game);
