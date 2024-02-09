import React from "react";

const VideoCard = ({ info }) => {
	//console.log(info);
	const { snippet, statistics } = info;
	const { thumbnails, localized } = snippet;
	//console.log(snippet.channelTitle);

	return (
		<div className="p-2 m-2 w-52 shadow-lg">
			<img
				className="rounded-lg"
				src={thumbnails.medium.url}
				alt="thumbnail"
			/>
			<ul>
				<li className="overflow-x-hidden font-bold">{localized.title}</li>
				<li className="text-base">{snippet.channelTitle}</li>
				<li className="text-sm">{statistics.viewCount} views</li>
			</ul>
		</div>
	);
};
//higher order component example
export const AdVideoCard = ({ info }) => {
	return (
		<div className="p-1 m-1 border border-red-900">
			<VideoCard info={info} />
		</div>
	);
};

export default VideoCard;
