import React from "react";

export default function Meme() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	const [allMemeImages, setAllMemeImages] = React.useState([]);

	React.useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((data) => setAllMemeImages(data.data.memes));
	}, []);

	function getMemeImage() {
		const memesArray = allMemeImages;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomNumber].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}
	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	return (
		<main>
			<div className="form">
				<input
					type="text"
					placeholder="Top text"
					className="form--input"
					onChange={handleChange}
					value={meme.topText}
					name="topText"
				/>
				<input
					type="text"
					placeholder="Bottom text"
					className="form--input"
					onChange={handleChange}
					value={meme.bottomText}
					name="bottomText"
				/>
				<button className="form--button" onClick={getMemeImage}>
					Get a new meme image 🖼
				</button>
			</div>
			<div className="meme">
				<img src={meme.randomImage} alt="lol" className="meme--image" />
				<h2 className="meme--text top" value={meme.topText}>
					{meme.topText}
				</h2>
				<h2 className="meme--text bottom" value={meme.bottomText}>
					{meme.bottomText}
				</h2>
			</div>
		</main>
	);
}
