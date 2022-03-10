import React, { useState } from 'react';

const Content = () => {
	const [name, setName] = useState('Dave');
	const [count, setCount] = useState(0);

	const handleNameChange = () => {
		const names = ['Bob', 'Kevin', 'Dave'];
		const int = Math.floor(Math.random() * 3);
		setName(names[int]);
	};

	const handleClick = () => {
		setCount(count + 1);
		setCount(count + 1);
		console.log(count);
	};
	const handleClick2 = () => {
		console.log(count);
	};

	return (
		<>
			<main>
				<p onDoubleClick={handleNameChange}> Hello! {name}!</p>
				<button
					className="
				bg-blue-600
				text-white
				p-2
                mr-3
				rounded-md"
					onClick={handleNameChange}
				>
					Change Name
				</button>
				<button
					className="
				bg-blue-600
				text-white
				p-2
                mr-2
				rounded-md"
					onClick={handleClick}
				>
					Click
				</button>
				<button
					className="
				bg-blue-600
				text-white
				p-2
                mr-2
				rounded-md"
					onClick={handleClick2}
				>
					Click It
				</button>
			</main>
		</>
	);
};

export default Content;
