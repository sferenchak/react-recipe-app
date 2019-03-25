import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IngredientList from './IngredientList';
import './Recipe.css';

export default class Recipe extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
		instructions: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired
	};
	render() {
		const { title, img, instructions, ingredients } = this.props;
		return (
			<div className='recipe-card'>
				<div className='recipe-card-img'>
					<img src={img} alt={title} />
				</div>
				<div className='recipe-card-content'>
					<h3 className='recipe-title'>{title}</h3>
					<h4>Ingredients:</h4>
					<IngredientList ingredients={ingredients} />
					<h4>Instructions:</h4>
					<p>{instructions}</p>
				</div>
			</div>
		);
	}
}
