import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {


  state = {
    allPokemon: [], 
    inputValue: '',
    pokemons: [],
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: '',
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemon => this.setState({
      allPokemon: pokemon,
      pokemons: pokemon
    }))
  }

  postPokemon = (formData) => {
    let configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }
    fetch('http://localhost:3000/pokemon', configObj)
    .then(resp => resp.json())
    .then(this.setState({
      allPokemon: [...this.state.allPokemon, formData]
    }))
  }

  handleSearch = (event) => {
    this.setState({
      inputValue: event.target.value
    })
    this.filterPets()
  }

  filterPets = () => {
    let search = this.state.allPokemon.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
    })
    this.state.inputValue.length === 1 ? this.setState({allPokemon: this.state.pokemons}) :
    this.setState({
      allPokemon: search
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = {
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
      front: this.state.frontUrl,
      back: this.state.backUrl
      }
    }
    this.postPokemon(formData)
  }
  
  render() {
    console.log(this.state.inputValue)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <br />
        <Search handleSearch={this.handleSearch} />
        <br />
        <PokemonCollection pokemon={this.state.allPokemon} inputValue={this.state.inputValue} />
      </Container>
    )
  }
}

export default PokemonPage
