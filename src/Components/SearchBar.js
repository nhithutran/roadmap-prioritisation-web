import React from "react"

const SearchBar = ({ initiatives, setSearchResults }) = {
        const handleSubmit = (e) => e.preventDefault()

    /* If input is empty or erase input then set search result to the origanal
    initiatives list */    
    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(initiatives)

        // Return boolean so if initiatives includes id or initiative title then it will include in the array
        const resultsArray = initiatives.filter(initiatives => initiatives.id.includes(e.target.value) || initiatives.initiatives.includes(e.target.value))

        setSearchResult(resultsArray)
    }    

    return (  
      <header>
        <div className="search" onSubmit={handleSubmit}>
          <input 
                className="searchTerm"
                type="text"
                id="search"
                placeholder="Search..."
                onChange={handleSearchChange}
            ></input>
            <button type="submit" className="searchButton">
            <img src="https://img.icons8.com/ios-glyphs/20/000000/search--v1.png" />
          </button>
        </div>
      </header>
    )
}

export default SearchBar;