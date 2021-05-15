import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
	const [ animeList, SetAnimeList] = useState([]);
	const [topAnime,SetTopAnime] = useState([]);
	const [search, setSearch] = useState("");


	const TopAnime = async () =>  {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
		.then(res => res.json());

		SetTopAnime(temp.top.slice(0,10));
	}

	useEffect(() => {
		TopAnime();
	}, [])



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
