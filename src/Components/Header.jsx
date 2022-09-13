import PropTypes from 'prop-types';
import React from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { gravatarEmail, name, score } = this.props;
    const MD5 = md5(gravatarEmail).toString();
    return (
      <header className="row align-items-center">
        <div className="col-2 col-lg-1 my-3">
          <img
            data-testid="header-profile-picture"
            src={ `https://www.gravatar.com/avatar/${MD5}` }
            alt={ name }
            className="img-fluid img-thumbnail"
            style={ { borderRadius: '50%', maxHeight: '80px' } }
          />
        </div>
        <div className="col-10 col-lg-4 my-2" style={ { color: '#ffffff' } }>
          <h5>
            <i className="fa-solid fa-user ms-1 me-2" style={ { color: '#f9ba18' } } />
            <span data-testid="header-player-name">{ name }</span>
          </h5>
          <h5>
            <i className="fa-solid fa-star me-2" style={ { color: '#f9ba18' } } />
            <span data-testid="header-score">{ score }</span>
          </h5>
        </div>
        <hr style={ { border: '1px solid #fff' } } />
      </header>
    );
  }
}

Header.propTypes = {
  gravatarEmail: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

const mapStateToProps = ({ player: { gravatarEmail, name, score } }) => ({
  gravatarEmail,
  name,
  score,
});

export default connect(mapStateToProps)(Header);
