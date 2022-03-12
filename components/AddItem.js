import { FaPlus } from 'react-icons/fa';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group flex mt-5 mb-6">
				<label
					htmlFor="addItem"
					className="form-label w-1/6 mr-2 inline-block mb-2 text-gray-700 font-bold text-[25px]"
				>
					Add item
				</label>
				<input
					type="text"
					className="form-control
        block
        w-full
        truncate
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					id="addItem"
					aria-describedby="add item"
					placeholder="Add item"
					required
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
				/>
				<button
					type="submit"
					aria-label="Add Item"
					className="
      w-1/6
      px-6
      py-2.5
      bg-blue-600
      text-green-400
      hover:text-blue-800
      font-medium
      text-md
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-green-600 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
				>
					<FaPlus width={10} height={10} className="mx-auto" />
				</button>
			</div>
		</form>
	);
};

export default AddItem;
