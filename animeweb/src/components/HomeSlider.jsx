import React from 'react'
import left from '../assets/left.png'
import right from '../assets/right.png'
import { GetAnime } from '../api/anime.js'
import { useEffect, useState } from 'react';
import test from '../assets/test.png'
function HomeSlider() {
    const [animeinfo, setAnimeinfo] = useState([]);
    useEffect(() => {
        const getAnimeApi = async () => {
            const fetchedanime = await GetAnime([]);
            setAnimeinfo(fetchedanime);
        };
        getAnimeApi();
    }, []);
    return (
        <div>
            <div className='flex justify-center rounded-[50px]  ml-[168px] mt-[50px] h-[608px] w-[1200px]  bg-cover' style={{ backgroundImage: `url(${test})` }} >
                <div className='relative flex flex-col text-black  gap-[20px] overflow-hidden break-words mt-[270px] mr-[450px] h-fit w-[700px] bg-opacity-50 p-[20px]'>
                    <h1>title</h1>
                    <h2>jp title</h2>
                    <h3 className="truncate w-[600px]">description</h3>
                    <button className='bg-white cursor-pointer font-bold text-[20px] text-black border-[3px] rounded-[50px] w-[150px] h-[50px] mt-[20px]'>watch</button>
                </div>
                <img className='right' src={right} alt="right" />
                <img className='left' src={left} alt="left" />
            </div>
            <div className='mt-[20px]'>
                <div className='flex justify-between items-center mb-4'>
                    <h1 className='font-bold text-black'>Popular Shows</h1>
                </div>

                <div className='grid grid-cols-4 gap-[20px] w-[70%]'>
                    {animeinfo.slice(0, 12).map((anime) => (
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
    );
}

export default HomeSlider