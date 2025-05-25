import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';

function SearchResults() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (!query) return;

            try {
                const res = await axios.get(`https://api.jikan.moe/v4/anime`, {
                    params: { q: query, limit: 20 }
                });
                setResults(res.data.data);
            } catch (err) {
                console.error('Error fetching search results:', err);
            }
        };

        fetchSearchResults();
    }, [query]);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold text-white mb-4">Results for: {query}</h1>
            <div className="grid grid-cols-4 gap-4">
                {results.map(anime => (
                    <Link key={anime.mal_id} to={`/anime/${anime.mal_id}`}>
                        <div className="bg-[#24A2DD] p-2 rounded-lg text-white hover:bg-[#1e90cc] transition">
                            <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-[250px] object-cover rounded" />
                            <h2 className="text-center mt-2">{anime.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SearchResults;
