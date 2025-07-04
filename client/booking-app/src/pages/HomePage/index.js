import { useState, useEffect, useRef } from 'react';
import Navbar from "..//../components/navbar";
import {Flex} from "antd";
import { getAllMovies } from '../../services/movies';
import { Link } from 'react-router-dom';
import './index.css'
import Banner from '../../components/banner';
import Footer from '../../components/footer';

const Home = () => {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        fetchMoviesData();
    },[]);

    const fetchMoviesData = async ()=>{
        const moviesData = await getAllMovies();
        console.log(moviesData)
        if(moviesData.success){
            setMovies(moviesData.data)
        }
    }

    return(
        <div>
            <Navbar/>
            <Banner/>
            
            <div className="main-content-area">
                <Flex justify='center' align='center' wrap>
                    {
                        movies && movies.map((movie) => {
                            return (
                                <Link to={`/movie/${movie._id}`} className='movie-link'>
                                <div key={movie._id} className='movie-card'>
                                    <img width={230} height={330} src={movie.poster} alt={movie.movieName + " Poster"} />
                                    <h3 width={200} wrap>{movie.movieName}</h3>
                                </div>
                                </Link>
                            )
                        })
                    }
                </Flex>
            </div>
            <Footer/>
           
                
        </div>
    )
}

export default Home;