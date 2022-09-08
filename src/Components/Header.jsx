import PropTypes from 'prop-types';
import React from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { gravatarEmail, name, score } = this.props;
    const MD5 = md5(gravatarEmail).toString();
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ `https://www.gravatar.com/avatar/${MD5}` }
          alt={ name }
        />
        <h3 data-testid="header-player-name">{ name }</h3>
        <h3 data-testid="header-score">{ score }</h3>
      </header>
    );
  }
}

Header.propTypes = {
  gravatarEmail: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

const mapStateToProps = ({ user: { gravatarEmail, name, score } }) => ({
  gravatarEmail,
  name,
  score,
});

export default connect(mapStateToProps)(Header);
