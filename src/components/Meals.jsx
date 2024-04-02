import React from 'react';
import { Container } from 'react-bootstrap';
import Meal from './Meal';
import useHttp from '../hooks/useHttp';
import Error from './Error';

const requestConfig = {};

export default function Meals() {
	const { data: loadedMeals, isLoading, error } = useHttp('http://localhost:3000/meals', requestConfig, []);

	if (isLoading) {
		return <p className='center'>Fetching meals...</p>;
	}

	if (error) {
		return <Error title='Failed to fetch meals' message={error} />;
	}

	return (
		<div className='meals'>
			<Container>
				<div className='meals__content'>
					<div className='row m-0 p-0'>
						{loadedMeals.map(meal => (
							<Meal key={meal.id} meal={meal} />
						))}
					</div>
				</div>
			</Container>
		</div>
	);
}
