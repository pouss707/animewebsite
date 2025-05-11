import axios from 'axios';
import { API_LINK } from '../apilink/links.js';

export const GetAnime = async()=>{
    try {
        const response = await axios.get(API_LINK);
        console.log(response.data);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching anime data:', error);
        throw error;
    }
}