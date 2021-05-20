import "./App.css";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Row from "./Components/Row";
import requests from "./requests";
function App() {
	return (
		<div className="App">
			{/* navbar */}
			<Nav />
			{/* banner */}
			<Banner />
			{/* rows */}
			<Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLarge />
			<Row title="Trending" fetchURL={requests.fetchTrending} />
			<Row title="Top Rated" fetchURL={requests.fetchTopRated} />
			<Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
			<Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
			<Row title="Action" fetchURL={requests.fetchActionMovies} />
			<Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
			<Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
