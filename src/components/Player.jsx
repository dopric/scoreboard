import React, {PureComponent} from 'react'
import Counter from './Counter'
import PropTypes from 'prop-types'

class Player extends PureComponent {
  constructor(props){
    super(props)
  }
  render(){
        return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
          { this.props.name }
        </span>
  
        <Counter score={this.props.score} 
        countHandler={(step)=>this.props.countHandler(step)}/>
      </div>
    );
  }


 
}

Player.propTypes = {
    score: PropTypes.number.isRequired,
    countHandler: PropTypes.func.isRequired,
  }
  export default Player