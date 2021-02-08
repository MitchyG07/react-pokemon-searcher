import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor() {
    super() 

    this.state = {
      show: false
    }
  }
  
  handleClick = () => {
    let flipShow = !this.state.show
    this.setState({
      show: flipShow
    })
  }

  render() {
    return (
      <Card onClick={() => this.handleClick()}>
        <div> 
          <div className="image">
            {this.state.show === false ? <img src={this.props.pokemon.sprites.front} alt="oh no!" /> : 
            <img src={this.props.pokemon.sprites.back} />}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
