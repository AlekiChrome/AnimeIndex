import React from "react";
import AnimeCard from "./AnimeCard";

const MainContent = (props) => {
    return (
        <main>
            <div className="main-header">
                <form className="search-sec" onSubmit={props.HandleSearch}>
                    <input
                        type="search"
                        placeholder="Search for an anime..."
                        required
                        value={props.search}
                        onChange={e => props.SetSearch(e.target.value)}
                    />
                </form>
            </div>

            <div className="anime-list">
                {props.animeList.map(anime => (
                    // <div className="anime-card">
                    //     { anime.title }
                    // </div>
                    <AnimeCard
                        anime={anime}
                        key={anime.mal_id}
                    />
                ))}
            </div>
        </main>
    )
}

export default MainContent;
