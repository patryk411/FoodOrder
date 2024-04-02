import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../assets/img/logo.jpg';
import UserProgressContext from '../store/UserProgressContext';
import Button from './UI/Button';
import CartContext from '../store/CartContext';

export default function Header() {
	const userProgressCtx = useContext(UserProgressContext);
	const cartCtx = useContext(CartContext);

	const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
		return totalNumberOfItems + item.quantity;
	}, 0);

	function handleShowCart() {
		userProgressCtx.showCart();
	}

	return (
		<header className='header'>
			<Container>
				<div className='header__content'>
					<div className='header__img'>
						<img src={logo} alt='' />
						<h1 className='header--heading'>food order</h1>
					</div>
					<Button onClick={handleShowCart} className='btn header--text'>
						Cart <span className='header--span'>({totalCartItems})</span>
					</Button>
				</div>
			</Container>
		</header>
	);
}
