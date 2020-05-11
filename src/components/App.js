import React from 'react';


import Header from './Header'
import Player from './Player'
import AddPlayer from './AddPlayer'




class App extends React.Component {
  state = {

    players: [
      {
        name: "Guil",
        id: 1,
        score: 0
      },
      {
        name: "Treasure",
        id: 2,
        score: 0
      },
      {
        name: "Ashley",
        id: 3,
        score: 0
      },
      {
        name: "James",
        id: 4,
        score: 0
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }
  
  countHandler =(id, step)=>{
  
    this.setState({
      players: this.state.players.map(player=>{
        if (player.id === id){
          const newScore =player.score+step
          player.score = newScore;
          return player
        
        }else{
          return player;
        }
      })
    })
  }

  addPlayer = name =>{
    this.setState(prevState =>{
      return {
      players: [
        {
          name, 
          score:0, 
          id: prevState.players.length + 1},
        ...prevState.players        
      ]
    }
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( player =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}   
            score={player.score}  
            countHandler={(step)=> this.countHandler(player.id, step)}      
          />
        )}
        <AddPlayer addPlayer={(name) => this.addPlayer(name)}/>
      </div>
    );
  }
}

export default App;
