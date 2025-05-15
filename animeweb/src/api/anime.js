import axios from 'axios';
import { ANIME_FULL, ANIME_TOP, ANIME_SEASON_NOW, ANIME_VIDEO } from '../apilink/links.js';

export const GetAnime = async()=>{
    try {
        const response = await axios.get(ANIME_FULL);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching anime data:', error);
        throw error;
    }
}
export const GetTopAnime = async()=>{
    try {
        const response = await axios.get(ANIME_TOP);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching anime data:', error);
        throw error;
    }
}
export const Getseasonnow = async()=>{
    try {
        const response = await axios.get(ANIME_SEASON_NOW);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching anime data:', error);
        throw error;
    }
}
export const GetAnimeVideo = async(id)=>{
    try {
        const response = await axios.get(ANIME_VIDEO.replace('{id}', id));
        console.log(response.data);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching anime data:', error);
        throw error;
    }
} 