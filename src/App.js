import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
	const [ animeList, SetAnimeList] = useState([]);
	const [topAnime,SetTopAnime] = useState([]);
	const [search, setSearch] = useState("");



	return (
		<div className="App">
			<Header />
			<div className="sidebar">

				<Sidebar
					topAnime={topAnime}/>

			<MainContent />
			</div>
		</div>
	);
}

export default App;
