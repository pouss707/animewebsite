import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Person4Icon from '@mui/icons-material/Person4';
import switchImage from '../assets/switch.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const toggleSearch = () => setShowSearch(prev => !prev);


    useEffect(() => {
        const fetchResults = async () => {
            if (query.trim().length === 0) {
                setResults([]);
                return;
            }
            try {
                const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&limit=5`);
                setResults(response.data.data);
            } catch (error) {
                console.error("Search error:", error);
            }
        };

        const delayDebounce = setTimeout(fetchResults, 300); // debounce input

        return () => clearTimeout(delayDebounce);
    }, [query]);

    const handleSearch = (e) => {
        e.preventDefault(); // prevent form reload
        if (query.trim()) {
            // Optional: do something on submit if needed
            console.log('Search submitted:', query);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch(e);
        }
    };



    return (
        <div>
            <header className='bg-[#24A2DD] text-black flex rounded-[50px] justify-between items-center p-[10px] h-[70px] w-[1470px] mx-[33px]  shadow-[0_0_0_0.05_black] font-bold'>
                <Link to="/"><img className='h-[60px] w-[60px] ml-[10px]' src={logo} alt="logo" /></Link>
                <div className='flex justify-center items-center ml-[106px]'>
                    <nav className='p-[10px]'>
                        <ul className="flex gap-[20px] list-image-none">
                            <select className='btn' name="categories">
                                <option value="">categories</option>
                                <option value="action">action</option>
                                <option value="adventure">adventure</option>
                                <option value="comedy">comedy</option>
                                <option value="drama">drama</option>
                                <option value="fantasy">fantasy</option>
                                <option value="horror">horror</option>
                                <option value="mystery">mystery</option>
                                <option value="romance">romance</option>
                                <option value="sci-fi">sci-fi</option>

                            </select>
                            <li className='btn'>blog</li>
                            <li className='btn'>contact</li>
                        </ul>
                    </nav>
                </div>
                <div className='flex justify-center items-center gap-[20px] mr-[10px]'>
                    <div className="relative">
                        {showSearch && (
                            <form onSubmit={handleSearch} className="flex items-center absolute right-0 bottom-[-20px]">
                                <input
                                    type="text"
                                    value={query}
                                    onKeyDown={handleKeyDown}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search anime..."
                                    className="p-[5px] border-[3px] rounded-[50px] shadow-[0.1em_0.1em_black]  bg-white  w-[350px]"
                                />
                            </form>
                        )}
                        {showSearch && results.length > 0 && (
                            <div className="absolute top-full w-[325px] mt-[20px] right-3 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                {results.map((anime) => (
                                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                                        <div className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                                            <img src={anime.images.jpg.image_url} alt={anime.title} className="w-10 h-14 rounded" />
                                            <span className="text-sm text-black">{anime.title}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                        {showSearch && results.length === 0 && query.trim() && (
                            <div className="absolute top-full left-0 w-[300px] mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-2 text-gray-500">
                                No results found
                            </div>
                        )}
                    </div>
                    <button onClick={toggleSearch} className="cursor-pointer bg-white border-[3px] rounded-[50px] p-[2px] shadow-[0.1em_0.1em_black]"><SearchIcon /></button>
                    <button className="cursor-pointer bg-white border-[3px] rounded-[50px] p-[2px] shadow-[0.1em_0.1em_black]"><Person4Icon /></button>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider">
                            <img className="knob" src={switchImage} />
                        </span>
                    </label>
                </div>
            </header>
        </div >
    )
}

export default Header