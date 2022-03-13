import React, { useState, useEffect } from 'react';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AddItem from '../components/AddItem';
import SearchItem from '../components/SearchItem';
import apiRequest from './api/apiRequest';

function Index() {
	const API_URL = 'http://localhost:3500/items';

	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState('');
	const [search, setSearch] = useState('');
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(API_URL);
				if (!response.ok) throw Error('Did not receive expected data');
				const listItems = await response.json();
				setItems(listItems);
				setFetchError(null);
			} catch (error) {
				setFetchError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchItems();
	}, []);

	const addItem = async (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id, checked: false, item };
		const listItems = [...items, myNewItem];
		setItems(listItems);

		const postOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(myNewItem),
		};
		const result = await apiRequest(API_URL, postOptions);
		if (result) setFetchError(result);
	};

	const handleCheck = async (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(listItems);

		const myItem = listItems.filter((item) => item.id === id);
		const updateOptions = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ checked: myItem[0].checked }),
		};
		const reqUrl = `${API_URL}/${id}`;
		const result = await apiRequest(reqUrl, updateOptions);
		if (result) setFetchError(result);
	};

	const handleDelete = async (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);

		const deleteOptions = {
			method: 'delete',
		};
		const reqUrl = `${API_URL}/${id}`;
		const result = await apiRequest(reqUrl, deleteOptions);
		if (result) setFetchError(result);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;
		addItem(newItem);
		setNewItem('');
	};

	return (
		<div className=" h-screen w-screen overflow-y-auto bg-white flex text-white  flex-col  mx-auto">
			<div className="bg-blue-600 text-center w-full lg:w-1/2 mx-auto h-15 text-3xl   ">
				<Header title="Grocery List" />
			</div>

			<div className="block p-6 rounded-lg shadow-lg bg-white w-full lg:w-1/2 mx-auto">
				<AddItem
					newItem={newItem}
					setNewItem={setNewItem}
					handleSubmit={handleSubmit}
				/>
			</div>
			<div className="block p-6 rounded-lg shadow-lg bg-white w-full lg:w-1/2 mx-auto border border-blue-600">
				<SearchItem search={search} setSearch={setSearch} />
			</div>
			<main className="w-full first-letter:first-line:flex flex-1 ">
				{isLoading && (
					<div className=" text-2xl block p-6 rounded-lg shadow-lg bg-white w-full lg:w-1/2 mx-auto border-2 border-green-600 text-center mt-10">
						<p style={{ color: 'green' }}>Loading Items.....</p>
					</div>
				)}
				{fetchError && (
					<div className=" text-2xl block p-6 rounded-lg shadow-lg bg-white w-full lg:w-1/2 mx-auto border-2 border-red-600 text-center mt-10">
						<p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>
					</div>
				)}

				<div className="  w-full   text-gray-900 flex  text-3xl  ">
					<div className="place-content-start w-full  mx-auto">
						{!fetchError && !isLoading && (
							<Content
								items={items.filter((item) =>
									item.item
										.toLowerCase()
										.includes(search.toLowerCase())
								)}
								handleCheck={handleCheck}
								handleDelete={handleDelete}
							/>
						)}
					</div>
				</div>
			</main>
			<div className="bg-blue-600 text-center w-full mx-auto h-15 text-white  text-3xl  ">
				<Footer length={items.length} />
			</div>
		</div>
	);
}

export default Index;
