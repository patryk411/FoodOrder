import React from 'react';

export default function CartItem({ name, onDecrease, onIncrease, price, quantity }) {
	return (
		<li className='cart__ux--li'>
			<p className='cart__ux--heading'>
				{name} - {quantity} x {price}
			</p>
			<div className='cart__ux__box'>
				<button onClick={onDecrease} className='btn cart__ux--btn'>
					<i class='fa-solid fa-minus'></i>
				</button>
				<span className='cart__ux--count'>{quantity}</span>
				<button onClick={onIncrease} className='btn cart__ux--btn'>
					<i class='fa-solid fa-plus'></i>
				</button>
			</div>
		</li>
	);
}
