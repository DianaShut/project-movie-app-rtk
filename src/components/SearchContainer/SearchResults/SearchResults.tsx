import React, { useState } from 'react';

import {IMovie} from "../../../interfaces";
import {searchService} from "../../../services";
import { SearchBar } from '../SearchBar';
import {Link, useParams} from "react-router-dom";
import css from './SearchResults.module.css'
import {Movie} from "../../MoviesContainer";

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);


    const handleSearch = (term: string) => {
        setLoading(true);
        searchService.getBySearch(term, '1').then(({ data }) => {
            setSearchResults(data.results);
            setLoading(false);
        }).catch(error => {
            console.error('Error searching movies:', error);
            setLoading(false);
        });
    };

    return (
        <div className={css.searchBar}>
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {!loading && searchResults.length > 0 && (
                <div className={css.searchResults}>
                    <h2>Search Results</h2>
                    <div className={css.results}>
                        {searchResults.map(movie =>
                            <Movie key={movie.id} movie={movie}/>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchPage;