import React from 'react'
import PropTypes from 'prop-types'


class Counter extends React.Component {
    constructor(props){
      super(props)
    }
    
    static propTypes={
      countHandler: PropTypes.func.isRequired,
      score: PropTypes.number.isRequired,
      missingProp: PropTypes.string.isRequired
    }
  

    render(){
      const  {score, countHandler} = this.props;

      return (
        <div className="counter">
          <button className="counter-action decrement" 
          onClick={()=> countHandler(-1)}> - </button>
          <span className="counter-score">{ score }</span>
          <button className="counter-action increment"
          onClick={()=> countHandler(1)} > + </button>
        </div>
      );
      }
  }
  
  // Counter.propTypes ={
  //   score: PropTypes.number.isRequired,
  //   countHandler: PropTypes.func.isRequired,
  // }

  Counter.defaultProps = {
    missingProp: 'This is a default value'
  }
  export default Counter;