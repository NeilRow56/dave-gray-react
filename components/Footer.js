import React from 'react';

const Footer = () => {
	const today = new Date();
	return (
		<footer>
			<p className="text-sm">
				{' '}
				Copyright AWP Coding &copy; {today.getFullYear()}
			</p>
		</footer>
	);
};

export default Footer;
