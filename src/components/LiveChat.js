import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
	const [liveMessage, setLiveMessage] = useState("");

	const dispatch = useDispatch();

	const chatMessages = useSelector((store) => store.chat.messages);

	useEffect(() => {
		const i = setInterval(() => {
			//API Polling
			//console.log("API Polling");
			dispatch(
				addMessage({
					name: generateRandomName(),
					message: makeRandomMessage(20) + "😊",
				})
			);
		}, 2000);

		return () => {
			clearInterval(i);
		};
	}, []);

	return (
		<>
			<div className="ml-2 p-2 border border-black w-full h-[400px] bg-slate-100 rounded-lg  overflow-y-scroll flex flex-col-reverse">
				<div>
					{chatMessages.map((c, index) => (
						<ChatMessage
							key={index}
							name={c.name}
							message={c.message}
						/>
					))}
				</div>
			</div>
			<form
				className="w-full p-2 ml-2 border border-black bg-gray-100 rounded-lg"
				onSubmit={(e) => {
					e.preventDefault();
					//console.log("ON Form Submit", liveMessage);
					dispatch(
						addMessage({
							name: "Gulshan Pareek ",
							message: liveMessage,
						})
					);
					setLiveMessage("");
				}}>
				<input
					className="w-60 px-2"
					type="text"
					value={liveMessage}
					onChange={(e) => {
						setLiveMessage(e.target.value);
					}}
				/>
				<button className="bg-violet-100 px-2 mx-3">Send</button>
			</form>
		</>
	);
};

export default LiveChat;
