import { GetTopAnime, Getseasonnow } from '../api/anime.js'
import { useEffect, useState } from 'react';

function AnimeSection() {
    const [animeinfo, setAnimeinfo] = useState([]);
    const [seasonnow, setSeasonnow] = useState([]);
    useEffect(() => {
        const getAnimeApi = async () => {
            const fetchedanime = await GetTopAnime([]);
            setAnimeinfo(fetchedanime);
        };
        const getAnimeSeasonNow = async () => {
            const fetchedseasonnow = await Getseasonnow([]);
            setSeasonnow(fetchedseasonnow);
        };
        getAnimeApi();
        getAnimeSeasonNow();
    }, []);
    return (
        <div>
            <div className='mt-[40px] ml-[20px]'>
                <div className='flex justify-center items-center mb-[40px] bg-[#24A2DD] w-fit p-[10px] rounded-[50px]'>
                    <h1 className='font-bold text-black'>Recently Added:</h1>
                </div>
                <div className='grid grid-cols-4 gap-[20px] w-[70%]'>
                    {seasonnow.map((now) => (
                        <div className='flex flex-col justify-center items-center' key={now.mal_id}>
                            <div
                                className='w-[225px] h-[335px] bg-cover bg-center rounded-[40px]'
                                style={{ backgroundImage: `url(${now.images.jpg.image_url})` }}>
                            </div>
                            <h3 className='text-center text-black truncate w-[200px]'>{now.title}</h3>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center mb-[40px] bg-[#24A2DD] w-fit p-[10px] rounded-[50px]'>
                    <h1 className='font-bold text-black'>Top Anime:</h1>
                </div>
                <div className='grid grid-cols-4 gap-[20px] w-[70%]'>
                    {animeinfo.map((anime) => (
                        <div className='flex flex-col justify-center items-center' key={anime.mal_id}>
                            <div
                                className='w-[225px] h-[335px] bg-cover bg-center rounded-[40px]'
                                style={{ backgroundImage: `url(${anime.images.jpg.image_url})` }}>
                            </div>
                            <h3 className='text-center text-black'>{anime.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AnimeSection