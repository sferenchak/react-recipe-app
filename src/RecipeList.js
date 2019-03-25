import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';

export default class RecipeList extends Component {
	static propTypes = {
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
		onDelete: PropTypes.func.isRequired
	};
	render() {
		const { onDelete } = this.props;
		const recipes = this.props.recipes.map((recipe, index) => (
			<Recipe key={recipe.id} {...recipe} onDelete={onDelete} />
		));
		return <section className='recipe-list'>{recipes}</section>;
	}
}
