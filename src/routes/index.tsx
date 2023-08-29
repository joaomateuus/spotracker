import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import { TopArtists } from "../pages/TopArtists";
import { TopTracks } from "../components/TracksGrid";

export const AppRoutes: React.FC = () => {
    return(
        <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/top_artists" element={<TopArtists />} />
            <Route path="/top_tracks" element={<TopTracks />} />
        </Routes>
    )
}