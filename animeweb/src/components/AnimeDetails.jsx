import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


function AnimeDetails() {
    const [anime, setAnime] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [recommendation, setRecommendation] = useState([]);
    const [expandedReviews, setExpandedReviews] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [animeRes, reviewsRes, recsRes] = await Promise.all([
                    axios.get(`https://api.jikan.moe/v4/anime/${id}/full`),
                    axios.get(`https://api.jikan.moe/v4/anime/${id}/reviews`),
                    axios.get(`https://api.jikan.moe/v4/anime/${id}/recommendations`),

                ]);

                setAnime(animeRes.data.data);
                setReviews(reviewsRes.data.data);
                setRecommendation(recsRes.data.data);

            } catch (error) {
                console.error('Failed to fetch anime details:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!anime || !reviews) {
        return <div className="text-white text-center mt-10">Loading...</div>;
    }

    const maxLength = 200;

    const toggleExpand = (mal_id) => {
        setExpandedReviews((prev) => ({
            ...prev,
            [mal_id]: !prev[mal_id],
        }));
    };

    return (
        <div>
            {anime && (
                <div className="flex flex-col gap-[50px]">
                    <div className='flex items-start w-[1181px] h-[600px] ml-[177.5px] mt-[50px] rounded-[40px] p-[20px] bg-[#24A2DD]'>
                        <div className=' w-[460px] h-[550px] bg-cover mt-[5px] rounded-[40px]' style={{ backgroundImage: `url(${anime.images.jpg.large_image_url})` }}>
                            <div className='flex justify-start items-end mx-[10px] pt-[480px] '>
                                <div className='flex justify-center items-center gap-[5px] bg-white w-fit h-[25px] p-[5px] rounded-[50px] mt-[10px]'>
                                    <VisibilityIcon />
                                    <h6 className='text-black'>{anime.scored_by}</h6>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit w-[848px]  ml-[30px]  gap-[10px] flex flex-col'>
                            <div className='flex flex-col'>
                                <h3 className=' text-black text-[30px] font-bold leading-[36px]'>{anime.titles[0].title}</h3>
                                <span className=' text-[#b7b7b7] text-[15px] text-left py-[5px] leading-[22.5px]'>{anime.titles?.find(t => t.type === 'Japanese')?.title || 'N/A'}</span>
                            </div>
                            <p className='text-black text-[15px] leading-[22.5px] break-words whitespace-normal line-clamp-10 '>{anime.synopsis}</p>
                            <ul className='grid grid-cols-2 gap-[10px] list-disc list-inside text-white text-[15px] leading-[30px] '>
                                <li className='w-[409px]'><span className='text-black inline-block text-left w-[100px] py-[5px] '>Type:</span>{anime.type}</li>
                                <li className='w-[409px]'><span className='text-black inline-block text-left w-[100px] py-[5px] '>Studio:</span>{anime.studios.map((studio) => studio.name)}</li>
                                <li className='w-[409px]'><span className='text-black inline-block text-left w-[100px] py-[5px] '>Date aired:</span>{anime.aired.prop.from.day}/{anime.aired.prop.from.month}/{anime.aired.prop.from.year} to {anime.aired.prop.to?.day && anime.aired.prop.to?.month && anime.aired.prop.to?.year
                                    ? `${anime.aired.prop.to.day}/${anime.aired.prop.to.month}/${anime.aired.prop.to.year}`
                                    : "?"}</li>
                                <li className='w-[409px]'><span className='text-black inline-block text-left w-[100px] py-[5px] '>Status:</span>{anime.status}</li>
                                <li className='w-[409px]'><span className='text-black inline-block text-left w-[100px] py-[5px] '>Genre:</span>{anime.genres.map((genre) => genre.name).join(', ')}</li>
                                <li className='w-[409px]'><span className='text-black inline-block text-left w-[100px] py-[5px] '>Scores:</span>{anime.score}</li>
                                <li className='w-[409px]'><span className='text-black inline-block text-left w-[100px] py-[5px] '>Rank:</span>{anime.rank}</li>
                                <li className='w-[409px]'><span className='text-black inline-block text-left w-[100px] py-[5px] '>Duration:</span>{anime.duration}</li>
                                <li className='w-[409px]'><span className='text-black inline-block text-left w-[100px] py-[5px] '>Episodes:</span>{anime.episodes}</li>
                                <li className='w-[409px]'><span className='text-black inline-block text-left w-[100px] py-[5px] '>Rating:</span>{anime.rating}</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex   w-[1181px] h-[662px] ml-[177.5px]  rounded-[40px]  bg-[#24A2DD]'>
                        <div className="flex justify-center items-center border-white border-[10px] bg-[#24A2DD] w-fit h-fit p-[10px] rounded-[50px]">
                            <h2 className="font-bold text-black">TRAILER</h2>
                        </div>
                        <div className="w-fit aspect-video ml-[58px] my-[20px]">
                            <iframe
                                src={anime.trailer?.embed_url || 'https://www.youtube.com/embed/0KSOMA3QBU0'}
                                title="YouTube trailer"
                                allowFullScreen
                                className="rounded-[40px] w-[1000px] h-[620px]  "
                            ></iframe>
                        </div>
                    </div>
                    <div className="ml-[177.5px]  w-[1181px] flex gap-[20px]">
                        <div className="rounded-[40px] bg-[#24A2DD] w-[900px] h-fit">
                            <div className="flex justify-center items-center border-white border-[10px] bg-[#24A2DD] w-fit p-[10px] rounded-[50px]">
                                <h2 className="font-bold text-black">REVIEWS</h2>
                            </div>
                            {reviews.length > 0 ? (
                                reviews.map((rev) => {
                                    const isLong = rev.review.length > maxLength;
                                    const isExpanded = expandedReviews[rev.mal_id] || false;
                                    const displayText = !isExpanded && isLong ? rev.review.slice(0, maxLength) + '...' : rev.review;

                                    return (
                                        <div key={rev.mal_id} className="flex justify-start  gap-[20px] p-[20px]">
                                            <img className="h-[50px] w-[50px] mt-[10px] rounded-[50%] " src={rev?.user?.images?.jpg?.image_url} alt="PP" />
                                            <div className="flex flex-col w-[600px] h-fit rounded-[40px] gap-[10px] bg-[#DD2432] p-[20px]">
                                                <h6 className="font-bold leading-[19.2px] text-white">
                                                    {rev?.user?.username} -{' '}
                                                    <span className="text-[#b7b7b7] leading-[19.2px] font-light">{rev.date.slice(0, 10)}</span>
                                                </h6>
                                                <p>{displayText}</p>
                                                {isLong && (
                                                    <button
                                                        onClick={() => toggleExpand(rev.mal_id)}
                                                        className="text-white cursor-pointer mt-2 self-end"
                                                        aria-label={isExpanded ? 'Show less' : 'Show more'}
                                                    >
                                                        {isExpanded ? '▲' : '▼'}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className='mx-[270px] p-[20px]'>No reviews available.</p>
                            )}
                        </div>
                        <div className="rounded-[40px] bg-[#24A2DD] w-[500px]">
                            <div className="flex justify-center items-center border-white border-[10px] bg-[#24A2DD] w-fit p-[10px] rounded-[50px]">
                                <h2 className="font-bold text-black">YOU MIGHT LIKE ...</h2>
                            </div>
                            {recommendation.length > 0 ? (
                                recommendation.slice(0, 10).map((rec) => (
                                    <Link to={`/anime/${rec.entry.mal_id}`} key={rec.entry.mal_id}>
                                        <div
                                            className="flex flex-col justify-between h-[400px] w-[280px] bg-cover rounded-[40px] mx-[70px] mt-[31px]"
                                            style={{ backgroundImage: `url(${rec.entry.images.jpg.image_url})` }}
                                        >

                                            <div className="flex justify-center items-center ml-[20px] mt-[20px] gap-[5px] bg-white w-fit h-[25px]  pr-[7px] rounded-[50px]">
                                                <h6 className="text-black"><ArrowDropUpIcon />{rec.votes}</h6>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <h3 className="text-[20px] text-black font-bold pb-[20px] px-[35px]">{rec.entry.title}</h3>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p className='p-[20px] mx-[75px]'>No recommendations available.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AnimeDetails;
