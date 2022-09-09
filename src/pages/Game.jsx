import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import { actionAddScore } from '../redux/actions';

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
    const { questions } = this.props;
    this.setState({
      answers: [...questions[0].incorrect_answers, questions[0].correct_answer],
      incorrectAnswers: questions[0].incorrect_answers,
      correctAnswer: questions[0].correct_answer,
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

  handleCalculateAddScore = (answer) => {
    const { score, dispatch } = this.props;
    const { contador } = this.state;
    const SCORE_VALUE_DEFAULT = 10;
    const SCORE_VALUE_HARD = 3;
    const SCORE_VALUE_MEDIUM = 2;
    const SCORE_VALUE_EASY = 1;

    if (answer.difficulty === 'hard') {
      return dispatch(
        actionAddScore(score + (SCORE_VALUE_DEFAULT + (contador * SCORE_VALUE_HARD))),
      );
    }
    if (answer.difficulty === 'medium') {
      return dispatch(
        actionAddScore(score + (SCORE_VALUE_DEFAULT + (contador * SCORE_VALUE_MEDIUM))),
      );
    }
    return dispatch(
      actionAddScore(score + (SCORE_VALUE_DEFAULT + (contador * SCORE_VALUE_EASY))),
    );
  };

  handleAnswerClick = (answer) => {
    this.setState({ styleButton: true });
    const { correctAnswer } = this.state;
    if (answer === correctAnswer) return this.handleCalculateAddScore(answer);
    return null;
  };

  render() {
    const { questions } = this.props;
    const { answers, styleButton, contador, isDisabled } = this.state;
    const RANDOM_NUMBER = 0.5;
    return (
      <section>
        <Header />
        <h3>{contador}</h3>
        <h3 data-testid="question-category">
          {questions[0].category}
        </h3>
        <h3 data-testid="question-text">
          {questions[0].question}
        </h3>
        <div data-testid="answer-options">
          {answers.sort(() => Math.random() - RANDOM_NUMBER).map((answer) => (
            <button
              type="button"
              key={ answer }
              disabled={ isDisabled }
              data-testid={ this.defineDataTestId(answer) }
              className={ styleButton ? this.defineClassStyle(answer) : '' }
              onClick={ () => { this.handleAnswerClick(answer); } }
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
  questions: PropTypes.arrayOf(PropTypes.shape({
  })),
}.isRequired;

const mapStateToProps = ({ reducerQuestions, player }) => ({
  questions: reducerQuestions.questions.results,
  score: player.score,
});

export default connect(mapStateToProps)(Game);
