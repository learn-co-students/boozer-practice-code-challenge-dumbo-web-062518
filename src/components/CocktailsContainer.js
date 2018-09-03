import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'
import SearchBar from "./SearchBar"
import {Grid, Segment} from "semantic-ui-react"

class CocktailsContainer extends Component {

  state = {
    cocktails: [],
    clickedCocktail: null,
    searchTerm: ''
  }

  componentDidMount() {
    fetch(`https://react-boozer-backend.herokuapp.com/api/v1/cocktails`)
      .then(cocktailsData => cocktailsData.json())
      .then(cocktailsData => this.setState({
        cocktails: cocktailsData
      })
    )
  }

  handleSearchTerm = e => {
    console.log(e.target.value)
    const searchTerm = e.target.value;
    this.setState({
      searchTerm
    }, this.filterCocktails);
  }

  filterCocktails = () => {
    if (this.state.searchTerm) {
      return this.state.cocktails.filter(cocktail => {
        return cocktail.name.toLowerCase().includes(this.state.searchTerm);
      });
    } else {
      return this.state.cocktails;
    }
  }

  setClickedCocktail = id => {
    fetch(`https://react-boozer-backend.herokuapp.com/api/v1/cocktails/${id}`)
      .then(res => res.json())
      .then(cocktailData => this.setState({
        clickedCocktail: cocktailData
      })
    )
  }

  render(){
    return (
      <Grid columns={2} divided>
        <Grid.Column width={4}>
          <Segment>
            <SearchBar value={this.state.searchTerm}
              handleInputChange={this.handleSearchTerm}/>
          </Segment>
        </Grid.Column>
      <Grid.Row stretch="true">
        <Grid.Column width={4}>
          <Segment style={{height: '95vh', overflowY: 'scroll'}}>
            <CocktailsList cocktails={this.filterCocktails()}
              handleClick={this.setClickedCocktail}/>
          </Segment>
        </Grid.Column>
      <Grid.Column width={8}>
        {this.state.clickedCocktail ? (
          <Segment>
            <CocktailDisplay cocktail={this.state.clickedCocktail} />
          </Segment>
        ) : null }
      <Segment>
        <Form />
      </Segment>
    </Grid.Column>
  </Grid.Row>
  </Grid>
    )
  }
}

export default CocktailsContainer
