import React from 'react'
import Counter from './Counter'
import PropTypes from 'prop-types'

const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
          { props.name }
        </span>
  
        <Counter score={props.score} 
        countHandler={(step)=>props.countHandler(step)}/>
      </div>
    );
  }

  Player.propTypes = {
    score: PropTypes.number.isRequired,
    countHandler: PropTypes.func.isRequired,
  }

  export default Player