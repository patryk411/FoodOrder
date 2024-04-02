import React, { useContext } from 'react';
import UserProgressContext from '../store/UserProgressContext';
import Modal from './UI/Modal';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import CartItem from './CartItem';

export default function Cart() {
	const userProgressCtx = useContext(UserProgressContext);
	const cartCtx = useContext(CartContext);

	const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

	function handleCloseCart() {
		userProgressCtx.hideCart();
	}

	function handleGoToCheckout() {
		userProgressCtx.showCheckout();
		// console.log('open checkout');
	}

	return (
		<Modal
			className='cart'
			open={userProgressCtx.progress === 'cart'}
			onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
			<div className='cart__content'>
				<h2 className='cart--heading'>Your Cart</h2>
				<ul className='cart__ux'>
					{cartCtx.items.map(item => (
						<CartItem
							key={item.id}
							name={item.name}
							quantity={item.quantity}
							price={item.price}
							onIncrease={() => cartCtx.addItem(item)}
							onDecrease={() => cartCtx.removeItem(item.id)}
						/>
					))}
				</ul>
				<div className='cart__footer'>
					<h4 className='cart__footer--prize'>${cartTotal}</h4>
					<div className='cart__footer__btns'>
						<Button onClick={handleCloseCart} textOnly className='cart__footer__btns--btn cart__footer__btns--close'>
							Close
						</Button>
						{cartCtx.items.length > 0 && (
							<button onClick={handleGoToCheckout} className='cart__footer__btns--btn cart__footer__btns--checkout'>
								Go to Checkout
							</button>
						)}
					</div>
				</div>
			</div>
		</Modal>
	);
}
