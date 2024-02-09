import React, { useEffect, useState } from "react";
import Logo from "../assets/img/youtube-logo.png";
import Hamburger from "../assets/img/hamburger.png";
import UserIcon from "../assets/img/user-icon.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const [suggestions, setSuggestions] = useState([]);

	const [showSuggestions, setShowSuggestions] = useState(false);
	const dispatch = useDispatch();
	const searchCache = useSelector((store) => store.search);
	useEffect(() => {
		// debouncing
		const timer = setTimeout(() => {
			if (searchCache[searchQuery]) {
				setSuggestions(searchCache[searchQuery]);
			} else {
				getSearchSuggestions();
			}
		}, 200);

		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);
	const getSearchSuggestions = async () => {
		console.log(searchQuery);
		const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
		const json = await data.json();

		setSuggestions(json[1]);
		//update cache
		dispatch(
			cacheResults({
				[searchQuery]: json[1],
			})
		);
	};

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
				<div>
					<input
						type="text"
						className="px-5 border border-gray-400 w-1/2 p-2 rounded-l-full"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onFocus={() => setShowSuggestions(true)}
						onBlur={() => setShowSuggestions(false)}
					/>
					<button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">
						🔍
					</button>
				</div>
				{showSuggestions && (
					<div className="fixed bg-white py-2 px-5 w-[23.3rem] shadow-lg rounded-lg border border-gray-100">
						<ul>
							{suggestions.map((s) => (
								<li
									key={s}
									className="py-2 shadow-sm hover:bg-gray-100">
									🔍{s}{" "}
								</li>
							))}
						</ul>
					</div>
				)}
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
