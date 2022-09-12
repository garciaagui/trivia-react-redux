import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import { actionAddScore, actionCurrQuestion } from '../redux/actions';

class Game extends React.Component {
  state = {
    answers: [],
    incorrectAnswers: [],
    correctAnswer: '',
    styleButton: false,
    contador: 30,
    isDisabled: false,
    nextBtn: false,
  };

  componentDidMount() {
    const { questions, currQuestion } = this.props;
    this.setState({
      answers: [...questions[currQuestion]
        .incorrect_answers, questions[currQuestion].correct_answer],
      incorrectAnswers: questions[currQuestion].incorrect_answers,
      correctAnswer: questions[currQuestion].correct_answer,
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
    this.setState({ nextBtn: true });
    if (answer === correctAnswer) return this.handleCalculateAddScore(answer);
    return null;
  };

  handleNextQuestion = () => {
    const { dispatch, history } = this.props;
    let { currQuestion } = this.props;
    const maxCurr = 4;
    if (currQuestion === maxCurr) history.push('/feedback');
    dispatch(actionCurrQuestion(currQuestion += 1));
    this.setState({
      contador: 30,
      styleButton: false,
    });
  };

  render() {
    const { questions, currQuestion } = this.props;
    const { answers, styleButton, contador, isDisabled, nextBtn } = this.state;
    const RANDOM_NUMBER = 0.5;
    return (
      <section>
        <Header />
        <h3>{contador}</h3>
        <h3 data-testid="question-category">
          {questions[currQuestion].category}
        </h3>
        <h3 data-testid="question-text">
          {questions[currQuestion].question}
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
          {
            nextBtn
              && (
                <button
                  type="button"
                  data-testid="btn-next"
                  onClick={ this.handleNextQuestion }
                >
                  Next
                </button>
              )
          }
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
  currQuestion: reducerQuestions.currQuestion,
  score: player.score,
});

export default connect(mapStateToProps)(Game);
