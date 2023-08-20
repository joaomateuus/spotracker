import { Images } from "./Images";
import { ExternalUrls } from "./TopArtists";

export interface Album {
    artists: Artist[]
    name: string
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    images: Images[];
    // Add other relevant properties related to the album
}

interface Artist{
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}