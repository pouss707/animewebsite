import { GetTopAnime, Getseasonnow } from '../api/anime.js'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function AnimeSection() {
    const [topanime, setTopanime] = useState([]);
    const [seasonnow, setSeasonnow] = useState([]);
    useEffect(() => {
        const getTopanime = async () => {
            const fetchedanime = await GetTopAnime();
            const uniqueAnime = Array.from(new Map(fetchedanime.map(item => [item.mal_id, item])).values());
            setTopanime(uniqueAnime);
        };

        const getAnimeSeasonNow = async () => {
            const fetchedseasonnow = await Getseasonnow();
            const uniqueNow = Array.from(new Map(fetchedseasonnow.map(item => [item.mal_id, item])).values());
            setSeasonnow(uniqueNow);
        };

        getTopanime();
        getAnimeSeasonNow();
    }, []);
    return (
        <div>
            <div className='mt-[50px] ml-[20px] flex flex-col gap-[50px] '>
                <div className='bg-[#24A2DD] w-fit  rounded-[50px] flex flex-col pb-[20px] '>
                    <div className='flex justify-center items-center mb-[40px] border-[10px] border-white bg-[#24A2DD] w-fit p-[10px] rounded-[50px]'>
                        <h1 className='font-bold text-black'>Recently Added:</h1>
                    </div>
                    <div className='grid grid-cols-4 gap-[20px] mx-[10px] w-[1000px]'>
                        {seasonnow.map((now) => (
                            <Link to={`/anime/${now.mal_id}`} key={now.mal_id}>
                                <div className='flex flex-col justify-center items-center' key={now.mal_id}>
                                    <div
                                        className='w-[225px] h-[335px] bg-cover bg-center rounded-[40px]'
                                        style={{ backgroundImage: `url(${now.images.jpg.image_url})` }}>
                                    </div>
                                    <h3 className='text-center text-black truncate w-[200px]'>{now.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='bg-[#24A2DD] w-fit  rounded-[50px] flex flex-col pb-[20px]  '>
                    <div className='flex justify-center items-center mb-[40px] border-[10px] border-white bg-[#24A2DD] w-fit p-[10px] rounded-[50px]'>
                        <h1 className='font-bold text-black'>Top Anime:</h1>
                    </div>
                    <div className='grid grid-cols-4 gap-[20px] w-[1000px] mx-[10px]'>
                        {topanime.map((anime) => (
                            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                                <div className='flex flex-col justify-center items-center'>
                                    <div
                                        className='w-[225px] h-[335px] bg-cover bg-center rounded-[40px]'
                                        style={{ backgroundImage: `url(${anime.images.jpg.image_url})` }}>
                                    </div>
                                    <h3 className='text-center text-black truncate w-[200px]'>{anime.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div >
    )
}

export default AnimeSection