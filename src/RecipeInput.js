import React, { Component } from 'react';
import './RecipeInput.css';

export default class RecipeInput extends Component {
	static defaultProps = {
		onClose() {},
		onSave() {}
	};
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			instructions: '',
			ingredients: [''],
			img: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleNewIngredient = this.handleNewIngredient.bind(this);
		this.handleChangeIng = this.handleChangeIng.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleNewIngredient(e) {
		const { ingredients } = this.state;
		this.setState({ ingredients: [...ingredients, ''] });
	}
	handleChangeIng(e) {
		const index = Number(e.target.name.split('-')[1]);
		const ingredients = this.state.ingredients.map((ingredient, i) =>
			i === index ? e.target.value : ingredient
		);
		this.setState({ ingredients });
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.onSave({ ...this.state });
		this.setState({
			title: '',
			instructions: '',
			ingredients: [''],
			img: ''
		});
	}

	render() {
		const { title, instructions, img, ingredients } = this.state;
		const { onClose } = this.props;
		let inputs = ingredients.map((ingredient, i) => (
			<div className='recipe-form-line' key={`ingredient-${i}`}>
				<label>
					{i + 1}.
					<input
						type='text'
						name={`ingredient-${i}`}
						value={ingredient}
						size={45}
						autoComplete='off'
						placeholder='Ingredient'
						onChange={this.handleChangeIng}
					/>
				</label>
			</div>
		));

		return (
			<div className='recipe-form-container'>
				<form className='recipe-form' onSubmit={this.handleSubmit}>
					<button className='close-button' type='button' onClick={onClose}>
						X
					</button>
					<div className='recipe-form-line'>
						<label htmlFor='recipe-title-input'>Title</label>
						<input
							type='text'
							id='recipe-title-input'
							key='title'
							name='title'
							value={title}
							size={42}
							autoComplete='off'
							onChange={this.handleChange}
						/>
					</div>
					<label
						htmlFor='recipe-instructions-input'
						style={{ marginTop: '5px' }}
					>
						Instructions
					</label>
					<textarea
						key='instructions'
						type='Instructions'
						name='instructions'
						id='recipe-instructions-input'
						cols='50'
						rows='8'
						autoComplete='off'
						value={instructions}
						onChange={this.handleChange}
					/>
					{inputs}
					<button
						className='buttons'
						type='button'
						onClick={this.handleNewIngredient}
					>
						+
					</button>
					<div className='recipe-form-line'>
						<label htmlFor='recipe-img-input'>Image Url</label>
						<input
							id='recipe-img-input'
							type='text'
							placeholder=''
							name='img'
							value={img}
							size={36}
							autoComplete='off'
							onChange={this.handleChange}
						/>
					</div>
					<button
						type='submit'
						className='buttons'
						style={{ alignSelf: 'flex-end', marginRight: 0 }}
					>
						SAVE
					</button>
				</form>
			</div>
		);
	}
}
