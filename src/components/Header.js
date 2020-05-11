import React from 'react';
import Stats from './Stats'
import PropTypes from 'prop-types'


const Header = (props) => {
    return (
      <header>
        <Stats players={props.players}/>
        <h1>{ props.title }</h1>
      </header>
    );
  }

  Header.propTypes = {
    players: PropTypes.array.isRequired
  }

  export default Header;