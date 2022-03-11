import LineItem from './LineItem';

const ItemList = ({ items, handleDelete, handleCheck }) => {
	return (
		<ul className="bg-white rounded-lg border  w-[800px] text-gray-900">
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
