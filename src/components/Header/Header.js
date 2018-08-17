import React from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import { getLogoHref } from '../../redux/selectors/api';

import './header.css';

const Header = props => {
  return (<header className='main-header'>
    <div className='main-header-logo-container'>
      { props.logoHref ?
        <img
          className='main-header-logo'
          src={props.logoHref}
          alt='site logo' /> :
        'Moderna'
      }
    </div>
  </header>)
}

const mapStateToProps = state => ({
  logoHref: getLogoHref(state)
});

Header.defaultProps = {
  logoHref: ''
};
Header.propTypes = {
  logoHref: T.string
};
export default connect(mapStateToProps)(Header);