import React from 'react'
import PropTypes from 'prop-types'

class AddPlayer extends React.Component{
    constructor(props){
        super(props)
    }
    state = {
        playerName: ''
    }

    onNameChanged =e =>{
        this.setState({
            playerName: e.target.value
        })
    }

    onSubmit = e=>{
        e.preventDefault();
        
        this.props.addPlayer(this.state.playerName)
        this.setState({
            playerName: ''
        })
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                type="text"
                value={this.state.playerName}
                onChange={this.onNameChanged}
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