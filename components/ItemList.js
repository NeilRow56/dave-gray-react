import LineItem from './LineItem';

const ItemList = ({ items, handleDelete, handleCheck }) => {
	return (
		<ul className="bg-white rounded-lg border mt-5  w-full lg:w-1/2 text-gray-900">
			{items.map((item) => (
				<LineItem
					key={item.id}
					item={item}
					handleDelete={handleDelete}
					handleCheck={handleCheck}
				/>
			))}
		</ul>
	);
};

export default ItemList;
