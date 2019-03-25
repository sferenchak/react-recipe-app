import React, { Component } from 'react';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';
import Nav from './Nav';
import './RecipeApp.css';

class RecipeApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: [
				{
					id: 0,
					title: 'Spaghetti',
					ingredients: ['1 jar sauce', '8 cups water', '1 box spaghetti'],
					instructions:
						'Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce',
					img: 'spaghetti (1).jpg'
				},
				{
					id: 1,
					title: 'Milkshake',
					ingredients: ['2 scoops ice cream', '8 ounces milk'],
					instructions: 'Combine ice cream and milk. Blend until creamy.',
					img: 'milkshake.jpg'
				},
				{
					id: 2,
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
			],
			nextRecipeId: 3,
			showForm: false
		};

		this.handleSave = this.handleSave.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	handleSave(recipe) {
		this.setState((prevState, props) => {
			const newRecipe = { ...recipe, id: this.state.nextRecipeId };
			return {
				nextRecipeId: prevState.nextRecipeId + 1,
				recipes: [...this.state.recipes, newRecipe],
				showForm: false
			};
		});
	}

	onDelete(id) {
		const recipes = this.state.recipes.filter(recipe => recipe.id !== id);
		this.setState({ recipes });
	}

	render() {
		const { showForm } = this.state;
		return (
			<div className='App'>
				<Nav onNewRecipe={() => this.setState({ showForm: true })} />
				{showForm ? (
					<RecipeInput
						onClose={() => this.setState({ showForm: false })}
						onSave={this.handleSave}
					/>
				) : null}
				<RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
			</div>
		);
	}
}

export default RecipeApp;
