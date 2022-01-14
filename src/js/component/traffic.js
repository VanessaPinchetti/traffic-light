import React, { useState } from "react";

const Traffic = () => {
	const [color, setColor] = useState("red");

	const handleClick = (e) => {
		const origin = e.target.id;
		setColor(origin);
	};

	const getSelected = (classes, origin) => {
		if (origin === color) {
			return classes + " selected";
		} else {
			return classes;
		}
	};

	return (
		<div className="traffic">
			<div className="mast"></div>
			<div
				id="red"
				className={getSelected("bg-danger rounded-circle light", "red")}
				onClick={(e) => {
					handleClick(e);
				}}></div>
			<div
				id="yellow"
				className={getSelected(
					"bg-warning rounded-circle light",
					"yellow"
				)}
				onClick={(e) => {
					handleClick(e);
				}}></div>
			<div
				id="green"
				className={getSelected(
					"bg-success rounded-circle light",
					"green"
				)}
				onClick={(e) => {
					handleClick(e);
				}}></div>
		</div>
	);
};

export default Traffic;
