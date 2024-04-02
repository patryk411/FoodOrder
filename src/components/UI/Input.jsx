import React from 'react';

export default function Input({ label, id, ...props }) {
	return (
		<div className='form-group'>
			<label htmlFor={id}>{label}</label>
			<input id={id} {...props} />
		</div>
	);
}
