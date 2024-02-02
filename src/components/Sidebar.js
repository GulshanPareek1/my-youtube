import React from "react";
import Home from "../assets/img/home-icon.png";
import ShortsIcon from "../assets/img/shorts-icon.png";
import VideoIcon from "../assets/img/video-icon.png";
import LiveIcon from "../assets/img/live-icon.png";
import MusicIcon from "../assets/img/music-icon.png";
import SportsIcon from "../assets/img/sports-icon.png";
import GamingIcon from "../assets/img/gaming-icon.png";
import MoviesIcon from "../assets/img/movies-icon.png";
import TrendingIcon from "../assets/img/trending-icon.png";
import NewsIcon from "../assets/img/news-icon.png";

const Sidebar = () => {
	return (
		<div className="p-5 w-44 shadow-lg ">
			<ul className="mb-3">
				<li className="flex pt-1 justify-evenly">
					<img
						className="h-6"
						src={Home}
						alt="menu"
					/>
					<h1>Home</h1>
				</li>
				<li className="flex pt-1 justify-evenly">
					<img
						className="h-5"
						src={ShortsIcon}
						alt="shorts"
					/>
					<h1>Shorts</h1>
				</li>
				<li className="flex pt-1 justify-evenly">
					<img
						className="h-6"
						src={VideoIcon}
						alt="shorts"
					/>
					<h1>Video</h1>
				</li>
				<li className="flex pt-1 justify-evenly">
					<img
						className="h-6"
						src={LiveIcon}
						alt="shorts"
					/>
					<h1>Live</h1>
				</li>
			</ul>
			<hr />
			<h1 className="font-bold pt-3 pl-3">Subscriptions</h1>
			<ul className="mb-3">
				<li className="flex pt-1 justify-evenly">
					<img
						className="h-6"
						src={MusicIcon}
						alt="music"
					/>
					<h1>Music</h1>
				</li>
				<li className="flex pt-1 justify-evenly">
					<img
						className="h-5"
						src={SportsIcon}
						alt="sports"
					/>
					<h1>Sports</h1>
				</li>
				<li className="flex pt-1 justify-evenly">
					<img
						className="h-6"
						src={GamingIcon}
						alt="gaming"
					/>
					<h1>Gaming</h1>
				</li>
				<li className="flex pt-1 justify-evenly">
					<img
						className="h-6"
						src={MoviesIcon}
						alt="movies"
					/>
					<h1>Movies</h1>
				</li>
			</ul>
			<hr />

			<h1 className="font-bold pt-3 pl-3">Explore</h1>
			<ul className="mb-3">
				<li className="flex pt-1 justify-evenly">
					<img
						className="h-6"
						src={TrendingIcon}
						alt="trending"
					/>
					<h1>Trending</h1>
				</li>
				<li className="flex pt-1 justify-evenly">
					<img
						className="h-6"
						src={MusicIcon}
						alt="music"
					/>
					<h1>Music</h1>
				</li>
				<li className="flex pt-1 justify-evenly">
					<img
						className="h-5"
						src={SportsIcon}
						alt="sports"
					/>
					<h1>Sports</h1>
				</li>
				<li className="flex pt-1 justify-evenly">
					<img
						className="h-6"
						src={GamingIcon}
						alt="gaming"
					/>
					<h1>Gaming</h1>
				</li>
				<li className="flex pt-1 justify-evenly">
					<img
						className="h-6"
						src={MoviesIcon}
						alt="movies"
					/>
					<h1>Movies</h1>
				</li>
				<li className="flex pt-1 justify-evenly">
					<img
						className="h-6"
						src={NewsIcon}
						alt="news"
					/>
					<h1>News</h1>
				</li>
				<li className="flex pt-1 justify-evenly">
					<img
						className="h-6"
						src={LiveIcon}
						alt="shorts"
					/>
					<h1>Live</h1>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
