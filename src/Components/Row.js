import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

const baseImgUrl = "https://image.tmdb.org/t/p/original";
const Row = ({ title, fetchURL, isLarge }) => {
	const [movies, setMovies] = useState([]);
	const [trailerURL,setTrailerURL] = useState("")

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get(fetchURL);
			setMovies(req.data.results);
		}
		fetchData();
	}, [fetchURL]);

	
	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
		  // https://developers.google.com/youtube/player_parameters
		  autoplay: 1,
		},
	  };

	const handleClick = (movie) =>{
		if(trailerURL) setTrailerURL("")
		else{
			movieTrailer(movie?.name || movie?.title || movie?.original_name||"")
				.then(url=>{
					const urlParams = new URLSearchParams(new URL(url).search)
					setTrailerURL(urlParams.get("v"))

				}).catch((err)=>{console.log(err);})
		}
	}
  
	return (
		<>
			<div className="row">
				<h1 className="row_title">{title}</h1>
				<div className="row_posters ">
					{movies.map((movie) => {
						return (
							<img
								className={` row_poster ${isLarge && "row_poster_large"}`}
								key={movie.id}
								src={`${baseImgUrl}/${isLarge ? movie.poster_path : movie.backdrop_path}`}
								alt={movie.title}
								onClick={()=>{handleClick(movie)}}
							/>
						);
					})}
				</div>
				{ trailerURL &&  <YouTube videoId={trailerURL}  opts={opts} />}
			</div>

		</>
	);
};

export default Row;
