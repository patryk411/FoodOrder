import React, { useContext } from 'react';
import Modal from './UI/Modal';
import Input from './UI/Input';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Checkout() {
	const userProgressCtx = useContext(UserProgressContext);
	const cartCtx = useContext(CartContext);

	function handleClose() {
		userProgressCtx.hideCheckout();
	}

	function handleSubmit() {}

	return (
		<Modal className='checkout' open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
			<div className='checkout__content'>
				<h3 className='cart--heading'>Checkout</h3>
				<form onSubmit={handleSubmit} className='checkout__form'>
					<p className='checkout--amount'>
						Total Amount: <span>$7.99</span>
					</p>
					<Input label='Full Name' type='text' id='name' required />
					<Input label='E-Mail Address' type='email' id='email' />
					<Input label='Street' type='text' id='street' required />
					<div className='checkout__place-info'>
						<Input label='Postal Code' type='number' id='postalCode' required />
						<Input label='City' type='text' id='city' required />
					</div>
					<div className='checkout__btns'>
						<button type='button' onClick={handleClose} className='cart__footer__btns--btn cart__footer__btns--close'>
							Close
						</button>
						<button type='submit' className='cart__footer__btns--btn cart__footer__btns--checkout'>
							Submit Order
						</button>
					</div>
				</form>
			</div>
		</Modal>
	);
}
