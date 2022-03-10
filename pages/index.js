import React from 'react';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';

function index() {
	const handleNameChange = () => {
		const names = ['Bob', 'Kevin', 'Dave'];
		const int = Math.floor(Math.random() * 3);
		return names[int];
	};
	return (
		<div className=" h-screen w-screen overflow-y-auto bg-white flex text-white  flex-col  mx-auto">
			<div className="bg-blue-600 text-center w-full mx-auto h-15 text-3xl   ">
				<Header />
			</div>
			<div className=" text-center w-full items-center justify-center text-gray-900 flex flex-1 text-3xl  ">
				<Content />
			</div>
			<div className="bg-blue-600 text-center w-full mx-auto h-15 text-white  text-3xl  ">
				<Footer />
			</div>
		</div>
	);
}

export default index;
