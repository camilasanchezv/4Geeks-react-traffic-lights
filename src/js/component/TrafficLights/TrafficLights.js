import React, { useState } from "react";

import "./styles.scss";

export default function TrafficLights() {
	const [light, setLight] = useState(1);

	return (
		<div className="container">
			<div
				onClick={() => setLight(3)}
				className={`light ${light === 3 ? "red" : ""}`}></div>
			<div
				onClick={() => setLight(2)}
				className={`light ${light === 2 ? "yellow" : ""}`}></div>
			<div
				onClick={() => setLight(1)}
				className={`light ${light === 1 ? "green" : ""}`}></div>
		</div>
	);
}
