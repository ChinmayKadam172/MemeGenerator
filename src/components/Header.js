import React from "react";
import logo from "../images/troll-face.jpg";

export default function Header() {
	return (
		<header className="header">
			<img src={logo} className="header--image" alt="lol" />
			<h2 className="header--title">Meme Generator</h2>
			<h4 className="header--project">Made by - Chinmay Kadam</h4>
		</header>
	);
}
