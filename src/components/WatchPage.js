import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
	const [searchParam] = useSearchParams();
	//console.log(searchParam.get("v"));
	// console.log(searchParam.keys().next().value);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
		// will only call once when we open the WatchPage
	}, []);
	return (
		<div className="px-5">
			<iframe
				width="1000"
				height="500"
				src={"https://www.youtube.com/embed/" + searchParam.keys().next().value}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen></iframe>
		</div>
	);
};

export default WatchPage;
