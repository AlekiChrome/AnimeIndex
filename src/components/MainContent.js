import React from "react";

const MainContent = () => {
    return (
        <main>
            <div className="main-header">
                <form className="search-sec">
                    <input
                        type="search"
                        placeholder="Search for an anime..."
                        required
                    />
                </form>
            </div>
        </main>
    )
}

export default MainContent;
