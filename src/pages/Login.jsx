import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTriviaToken, getTriviaQuestions } from '../services/fetchapi';

class Login extends React.Component {
  state = {
    isButtonPlayDisable: true,
    email: '',
    name: '',
  };

  validateInputs = () => {
    const { name, email } = this.state;
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isValidLength = email.length > 0 && name.length > 0;
    return isValidEmail && isValidLength;
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
      isButtonPlayDisable: !this.validateInputs(),
    });
  };

  handlePlay = async () => {
    const token = await getTriviaToken();
    localStorage.setItem('token', (token));
    const questions = getTriviaQuestions(token);
    console.log(questions);
    const { history } = this.props;
    history.push('/game');
  };

  render() {
    const { email, name, isButtonPlayDisable } = this.state;
    return (
      <div>
        <label htmlFor="input">
          EMAIL
          <input
            type="email"
            data-testid="input-gravatar-email"
            placeholder="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
        </label>
        <label htmlFor="name">
          NOME
          <input
            type="text"
            data-testid="input-player-name"
            placeholder="nome"
            name="name"
            value={ name }
            onChange={ this.handleChange }
            required
          />
        </label>
        <button
          type="button"
          data-testid="btn-play"
          disabled={ isButtonPlayDisable }
          onClick={ this.handlePlay }
        >
          Play
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  // dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect()(Login);
