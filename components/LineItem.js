import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleDelete, handleCheck }) => {
	return (
		<div
			key={item.id}
			className="flex items-center bg-gray-100  border-b border-white "
		>
			<li className="px-6 py-2  w-full rounded-lg">
				<input
					type="checkbox"
					checked={item.checked}
					onChange={() => handleCheck(item.id)}
					className=" w-6 h-6 mx-4"
				/>
				<label
					style={
						item.checked
							? {
									textDecoration: 'line-through',
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
				aria-label={`Delete ${item.item}`}
				onClick={() => handleDelete(item.id)}
				tabIndex="0"
				className=" text-blue-900  hover:text-red-600 mr-2"
			/>
		</div>
	);
};

export default LineItem;
