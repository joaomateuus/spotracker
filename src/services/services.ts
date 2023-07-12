/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { httpClient } from "./api";

// interface BaseResponse<T> {
//     data: T | null;
//     errors: T | null;
// }

export async function getTopArtists() {
    const response = await httpClient.get("https://api.spotify.com/v1/me/top/artists");

    let errors = null;

    if(!response.data){
        errors = {
            status: response.status,
            message: response.statusText
        }
    }

    return{
        data: response.data,
        errors: errors
    }
}

export async function getUserProfile() {
    const response = await httpClient.get("https://api.spotify.com/v1/me");

    let errors = null;

    if(!response.data){
        errors = {
            status: response.status,
            message: response.statusText
        }
    }

    return{
        data: response.data,
        errors: errors
    }
}

export async function recentlyPlayedTracks() {
    const response = await httpClient.get("https://api.spotify.com/v1/me/player/recently-played");

    let errors = null;

    if(!response.data){
        errors = {
            status: response.status,
            message: response.statusText
        }
    }

    return{
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        data: response.data.items,
        errors: errors
    }
}