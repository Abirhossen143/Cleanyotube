import CssBaseline from "@mui/material/CssBaseline";
import usePlaylists from "./hooks/usePlaylists";
import Navbar from "./Component/Navbar/index";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavandRec from "./Component/Listoffav&rec/FavandRec";
import Favourite from "./Component/favouritelist/Favourite";
import Recent from "./Component/Recent/Recent";
import PlayerPage from "./Component/PlayerPage";
import Homepage from "./Component/Homepage";
import Notfound from "./Component/NotFound";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { playlists, getPlaylistById } = usePlaylists();

  const playlistArray = Object.values(playlists);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <BrowserRouter>
        <CssBaseline />
        <Navbar getPlaylistById={getPlaylistById} />
        <FavandRec />
        <Routes>
          <Route
            path="/"
            element={<Homepage playlistArray={playlistArray} />}
          />
          <Route
            path="/player/:playlistId"
            element={<PlayerPage playlists={playlists} />}
          />
          <Route
            path="/player/:playlistId"
            element={<PlayerPage playlists={playlists} />}
          />
          <Route path="/Fav-list/fav" element={<Favourite />} />
          <Route path="/Recent-list/recent" element={<Recent />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
