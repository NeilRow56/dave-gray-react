import ItemList from './ItemList';

const Content = ({ items, handleDelete, handleCheck }) => {
	return (
		<>
			<main className="flex  w-full ">
				{items.length ? (
					<div className="flex justify-center mx-auto mt-10">
						<ItemList
							items={items}
							handleDelete={handleDelete}
							handleCheck={handleCheck}
						/>
					</div>
				) : (
					<p className="mt-20  mx-auto">Your list is empty</p>
				)}
			</main>
		</>
	);
};

export default Content;
