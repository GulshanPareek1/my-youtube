import React from "react";
import Button from "./Button";

const list = [
	"All",
	"Music",
	"HTML",
	"Arjit",
	"Live",
	"Java",
	"News",
	"Graphics",
	"Algorithms",
	"Sales",
	"Bhajan Music",
	"Watched",
	// "Sports",
	// "UPSC",
];
const ButtonList = () => {
	return (
		<div className="flex overflow-hidden overflow-x-scroll  max-w-fit">
			{list.map((item) => (
				<Button
					key={item}
					name={item}
				/>
			))}
		</div>
	);
	// return (
	// 	<div className="flex">
	// 		<Button name="All" />
	// 		<Button name="Music" />
	// 		<Button name="HTML" />
	// 		<Button name="Arjit" />
	// 		<Button name="Live" />
	// 		<Button name="Java" />
	// 		<Button name="News" />
	// 		<Button name="Graphics" />
	// 		<Button name="Algorithms" />
	// 		<Button name="Sales" />
	// 	</div>
	// );
};
export default ButtonList;
