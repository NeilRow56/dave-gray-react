import React, { useState } from 'react';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Index() {
	const [items, setItems] = useState([
		{
			id: 1,
			checked: true,
			item: 'One half pound bag of cocoa covered Almonds - unsalted',
		},
		{
			id: 2,
			checked: false,
			item: 'Item 2',
		},
		{
			id: 3,
			checked: false,
			item: 'Item 3',
		},
	]);

	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id
				? {
						...item,
						checked: !item.checked,
				  }
				: item
		);
		setItems(listItems);
		localStorage.setItem('shoppinglist', JSON.stringify(listItems));
	};

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
		localStorage.setItem('shoppinglist', JSON.stringify(listItems));
	};

	const handleNameChange = () => {
		const names = ['Bob', 'Kevin', 'Dave'];
		const int = Math.floor(Math.random() * 3);
		return names[int];
	};
	return (
		<div className=" h-screen w-screen overflow-y-auto bg-white flex text-white  flex-col  mx-auto">
			<div className="bg-blue-600 text-center w-full mx-auto h-15 text-3xl   ">
				<Header title="Grocery List" />
			</div>
			<div className="  w-full   text-gray-900 flex flex-1 text-3xl w ">
				<div className="place-content-start w-full">
					<Content
						items={items}
						handleCheck={handleCheck}
						handleDelete={handleDelete}
					/>
				</div>
			</div>
			<div className="bg-blue-600 text-center w-full mx-auto h-15 text-white  text-3xl  ">
				<Footer length={items.length} />
			</div>
		</div>
	);
}

export default Index;
