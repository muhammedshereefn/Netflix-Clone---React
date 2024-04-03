import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../../Constants/constants';
import './Banner.css';
import axios from '../../axios';

const Banner = () => {
    const [movies, setMovies] = useState([]); // Initialize movies state as an empty array
    const [randomIndex, setRandomIndex] = useState(null); // Initialize randomIndex state as null

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data.results);
            setMovies(response.data.results);
            const randomIndex = Math.floor(Math.random() * response.data.results.length); // Generate random index
            setRandomIndex(randomIndex);
        });
    }, []);

    const movie = movies[randomIndex]; // Get movie using randomIndex

    return (
        <div style={{backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})`}} className='banner'>
            {movie && ( // Conditional rendering to ensure movie is not null
                <div className='content'>
                        <h1 className='title'>{movie.name || movie.title}</h1>                    <div className='banner_buttons'>
                        <button className='button'>Play</button>
                        <button className='button'>My List</button>
                    </div>
                    <h1 className='description'>{movie.overview}</h1>
                </div>
            )}
            <div className='fade_bottom'></div>
        </div>
    );
};

export default Banner;
