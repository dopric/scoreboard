import React from 'react'
import PropTypes from 'prop-types'

class AddPlayer extends React.Component{
    constructor(props){
        super(props)
    }
    // state = {
    //     playerName: ''
    // }

    playerInput = React.createRef();

    // onNameChanged =e =>{
    //     this.setState({
    //         playerName: e.target.value
    //     })
    // }

    onSubmit = e=>{
        e.preventDefault();
        
        this.props.addPlayer(this.playerInput.current.value)
        // this.setState({
        //     playerName: ''
        // })
        e.currentTarget.reset()
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                type="text"
                ref={this.playerInput}
                placeholder="Enter a player's name"
                />
                <input type="submit"
                value="Add Player"/>
            </form>
        )
    }
}

AddPlayer.propTypes ={
    addPlayer: PropTypes.func.isRequired
}
export default AddPlayer;