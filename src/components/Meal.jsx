import React, { useContext } from 'react';
import CartContext from '../store/CartContext';

export default function Meal({ meal }) {
	const cartCtx = useContext(CartContext);

	function handleAddMealToCart() {
		cartCtx.addItem(meal);
	}

	return (
		<div className='meals__card col-4 p-0'>
			<img className='img-fluid' src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
			<div className='meals__text'>
				<h3 className='meals__text--heading'>{meal.name}</h3>
				<p className='meals__text--price'>${meal.price}</p>
				<p className='meals__text--text'>{meal.description}</p>
				<button onClick={handleAddMealToCart} className='btn meals__text--btn'>
					Add to Cart
				</button>
			</div>
		</div>
	);
}
