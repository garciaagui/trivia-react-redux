import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import {
  actionAddScore, actionCurrQuestion, actionAddAssertions } from '../redux/actions';

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

  handleAddAssertions = () => {
    const { dispatch } = this.props;
    let { assertions } = this.props;
    dispatch(actionAddAssertions(assertions += 1));
  };

  handleAnswerClick = (answer) => {
    this.setState({ styleButton: true });
    const { correctAnswer } = this.state;
    this.setState({ nextBtn: true });
    if (answer === correctAnswer) {
      this.handleAddAssertions();
      return this.handleCalculateAddScore(answer);
    }
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

  decodeEntity = (inputStr) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = inputStr;
    return textarea.value;
  };

  render() {
    const { questions, currQuestion } = this.props;
    const { answers, styleButton, contador, isDisabled, nextBtn } = this.state;
    const RANDOM_NUMBER = 0.5;
    const warningTime = 25;
    const dangerTime = 15;
    return (
      <>
        <Header />
        <div className="row justify-content-center align-items-center mt-3">
          <div
            className="col-11 col-md-6 col-lg-5 border rounded-3 p-4 px-lg-5 shadow"
            style={ { background: 'white' } }
          >
            <h3
              className={ `fs-1 text-center 
              text-success 
              bg-light
              p-2
              shadow-sm
              rounded-3
              ${contador <= warningTime && 'text-warning'} 
              ${contador <= dangerTime && 'text-danger'}` }
            >
              <i className="fa-solid fa-clock me-2" />
              {contador}
            </h3>
            <h2
              className="text-start my-3 text-primary"
              data-testid="question-category"
            >
              {this.decodeEntity(questions[currQuestion].category)}
            </h2>
            <h4 data-testid="question-text">
              {this.decodeEntity(questions[currQuestion].question)}
            </h4>
            <div data-testid="answer-options" className="row mt-3">
              {answers.sort(() => Math.random() - RANDOM_NUMBER).map((answer) => (
                <button
                  type="button"
                  key={ answer }
                  disabled={ isDisabled }
                  data-testid={ this.defineDataTestId(answer) }
                  className={
                    `btn btn-lg btn-light d-block my-2 text-start unselect-answer
                    ${styleButton ? this.defineClassStyle(answer) : ''} `
                  }
                  onClick={ () => { this.handleAnswerClick(answer); } }
                >
                  {this.decodeEntity(answer)}
                </button>
              ))}
              {
                nextBtn
              && (
                <button
                  type="button"
                  data-testid="btn-next"
                  className="btn btn-lg btn-primary mt-3"
                  onClick={ this.handleNextQuestion }
                  style={ { fontWeight: '900' } }
                >
                  Next
                  <i className="fa-solid fa-arrow-right fa-lg ms-2" />
                </button>
              )
              }
            </div>
          </div>
        </div>
      </>
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
  assertions: player.assertions,
});

export default connect(mapStateToProps)(Game);
