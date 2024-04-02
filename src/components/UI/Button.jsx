import React from 'react';

export default function Button({ children, textOnly, ...props }) {
	return <button {...props}>{children}</button>;
}
