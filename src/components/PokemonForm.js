import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(event) => {this.props.handleSubmit(event)}}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.props.handleChange} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={this.props.handleChange} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={this.props.handleChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={this.props.handleChange} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
