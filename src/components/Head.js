import React from "react";
import Logo from "../assets/img/youtube-logo.png";
import Hamburger from "../assets/img/hamburger.png";
import UserIcon from "../assets/img/user-icon.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
	const dispatch = useDispatch();

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
		// toggleMenu is a function
	};

	return (
		<div className="grid grid-flow-col p-4 m-2 shadow-lg">
			<div className="flex col-span-1">
				<img
					onClick={() => toggleMenuHandler()}
					className="h-8 cursor-pointer "
					src={Hamburger}
					alt="menu"
				/>
				<a href="/">
					<img
						className="h-8  mx-2 "
						src={Logo}
						alt="youtube-logo"
					/>
				</a>
			</div>
			<div className="col-span-10 ml-12 px-10 ">
				<input
					type="text"
					className="border border-gray-400 w-1/2 p-2 rounded-l-full"
				/>
				<button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">
					🔍
				</button>
			</div>
			<div className="col-span-1">
				<img
					className="h-8 "
					src={UserIcon}
					alt="user icon"
				/>
			</div>
		</div>
	);
};

export default Head;
