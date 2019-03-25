import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';

export default class RecipeList extends Component {
	static defaultProps = {
		recipes: [
			{
				title: 'Spaghetti',
				ingredients: ['1 jar sauce', '8 cups water', '1 box spaghetti'],
				instructions:
					'Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce',
				img: 'spaghetti (1).jpg'
			},
			{
				title: 'Milkshake',
				ingredients: ['2 scoops ice cream', '8 ounces milk'],
				instructions: 'Combine ice cream and milk. Blend until creamy.',
				img: 'milkshake.jpg'
			},
			{
				title: 'Avocado Toast',
				ingredients: [
					'2 slices of break',
					'1 avocado',
					'1 tablespoon olive oil',
					'1 pinch of salt',
					'pepper'
				],
				instructions:
					'Toast break. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.',
				img: 'avocado_toast.jpg'
			}
		]
	};

	static propTypes = {
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired
	};
	render() {
		return (
			<section className='recipe-list'>
				{this.props.recipes.map((recipe, index) => (
					<Recipe key={index} {...recipe} />
				))}
			</section>
		);
	}
}
