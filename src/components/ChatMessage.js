import React from "react";
import UserIcon from "../assets/img/user-icon.png";
const ChatMessage = ({ name, message }) => {
	return (
		<div className="flex items-center shadow-sm p-2">
			<img
				className="h-8"
				src={UserIcon}
				alt="usericon"
			/>
			<span className="font-bold px-2">{name}</span>
			<span>{message}</span>
		</div>
	);
};

export default ChatMessage;
