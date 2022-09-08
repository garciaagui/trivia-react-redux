import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isDisable: true,
      email: '',
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.verifyBtn = this.verifyBtn.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => this.verifyBtn());
  }

  verifyBtn() {
    const { name, email } = this.state;
    const verifyEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (verifyEmail.test(email) && name.length > 0) {
      this.setState({ isDisable: false });
    } else {
      this.setState({ isDisable: true });
    }
  }

  render() {
    const { email, name, isDisable } = this.state;
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
          disabled={ isDisable }
          onClick={ this.handleBtn }
        >
          Play
        </button>
      </div>
    );
  }
}

// Login.propTypes = {
//   dispatch: PropTypes.func,
//   history: PropTypes.shape({
//     push: PropTypes.func,
//   }),
// }.isRequired;

export default connect()(Login);
