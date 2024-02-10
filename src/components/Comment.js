import React from "react";
import UserIcon from "../assets/img/user-icon.png";

const Comment = ({ data }) => {
	const { name, text, replies } = data;
	return (
		<div className="flex shadow-sm bg-gray-100 p-2 m-2 rounded-lg">
			<img
				className="w-12 h-10"
				src={UserIcon}
				alt="user icon"
			/>
			<div className="px-2">
				<h1>{name}</h1>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Comment;
