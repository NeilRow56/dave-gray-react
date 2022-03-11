import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
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

	return (
		<>
			<main className="flex  w-full ">
				{items.length ? (
					<div className="flex justify-center mx-auto mt-10">
						<ul className="bg-white rounded-lg border  w-[800px] text-gray-900">
							{items.map((item) => (
								<div
									key={item.id}
									className="flex items-center bg-gray-100  border-b border-white "
								>
									<li className="px-6 py-2  w-full rounded-lg">
										<input
											type="checkbox"
											checked={item.checked}
											onChange={() =>
												handleCheck(item.id)
											}
											className=" w-6 h-6 mx-4"
										/>
										<label
											style={
												item.checked
													? {
															textDecoration:
																'line-through',
													  }
													: null
											}
											onDoubleClick={() => {
												handleCheck(item.id);
											}}
											htmlFor=""
											className="mr-4 text-[25px]"
										>
											{item.item}
										</label>
									</li>

									<FaTrashAlt
										width={20}
										height={20}
										role="button"
										onClick={() => handleDelete(item.id)}
										tabIndex="0"
										className=" text-blue-900  hover:text-red-600 mr-2"
									/>
								</div>
							))}
						</ul>
					</div>
				) : (
					<p className="mt-20  mx-auto">Your list is empty</p>
				)}
			</main>
		</>
	);
};

export default Content;
