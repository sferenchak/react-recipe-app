import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class IngredientList extends Component {
	static propTypes = {
		ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
	};
	static defaultProps = {
		ingredients: []
	};
	render() {
		const { ingredients } = this.props;
		return (
			<ul>
				{ingredients.map((ingredient, index) => (
					<li key={index}>{ingredient}</li>
				))}
			</ul>
		);
	}
}
