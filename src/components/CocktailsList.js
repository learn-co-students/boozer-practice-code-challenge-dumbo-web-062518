import React, { Component } from 'react'
import Cocktail from './Cocktail'
import CocktailDisplay from './CocktailDisplay'

class CocktailsList extends Component {

  state = {
    display: true
  }

  createCocktails = () => {
    return this.props.cocktails.map((cocktail) => {
      return <Cocktail key={cocktail.id} handleClick={this.props.handleClick} cocktail={cocktail}/>
    })
  };

  createDisplays = () => {
    return this.props.cocktails.map((cocktail) => {
      return <CocktailDisplay key={cocktail.id} cocktail={cocktail}/>
    })
  }

  render(){
    return (
      <div id="cocktail-list">
        {this.createCocktails()}
      </div>
    )
  }
}

export default CocktailsList
