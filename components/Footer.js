import React from 'react';

const Footer = ({ length }) => {
	const today = new Date();
	return (
		<footer className="flex justify-center">
			<p className="text-sm mr-5">
				{length} : List {length === 1 ? 'item' : 'items'}
			</p>

			<p className="text-sm">
				{' '}
				Copyright AWP Coding &copy; {today.getFullYear()}
			</p>
		</footer>
	);
};

export default Footer;
