import React, { useEffect, useState } from "react";
import requests from "../requests";
import axios from "../axios";
import "./Banner.css";
const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const res = await axios.get(requests.fetchNetflixOriginals);

			setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]);
			console.log(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]);
		}

		fetchData();
	}, []);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}
	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: " center center",
			}}
		>
			<div className="banner_content">
				<h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
				<div className="banner_buttons">
					<button className="btn">Play</button>
					<button className="btn">My List</button>
				</div>
				<p className="banner_desc">{truncate(movie?.overview, 200)}</p>
			</div>

			<div className="banner_fadebottom" />
		</header>
	);
};

export default Banner;
