import {
  Button,
  Card,
  CardMedia,
  Grid,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/system";
import usePlaylists from "./hooks/usePlaylists";
import Navbar from "./Component/Navbar/index";
import PlaylistCardItem from "./Component/playlistcard/index";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
// import { YouTube } from "react-youtube";
import FavandRec from "./Component/Listoffav&rec/FavandRec";
import Favourite from "./Component/favouritelist/Favourite";
import YouTube from "react-youtube";
import PlaylistVideo from "./Component/PlaylistVideo/PlaylistVideo";
import Videoplayer from "./Component/VideoPlayer/Videoplayer";
import { useState } from "react";
import Recent from "./Component/Recent/Recent";

const Homepage = ({ playlistArray }) => {
  return (
    <Container maxWidth={"lg"} sx={{ my: 5 }}>
      {playlistArray.length > 0 && (
        <Grid container alignItems="stretch">
          {playlistArray.map((item) => (
            <Grid item xs={12} md={6} lg={5} mb={2}>
              <PlaylistCardItem
                key={item.playlistId}
                playlistId={item.playlistId}
                playlistThumbnail={item.playlistThumbnail}
                playlistTitle={item.playlistTitle}
                channelTitle={item.channelTitle}
                item={item}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

const PlayerPage = ({ playlists }) => {
  const { playlistId } = useParams();
  const [data, setData] = useState([]);
  const CurrentPlay = playlists[playlistId];
  if (!CurrentPlay) return;

  const handleVideoClick = (id) => {
    const filterd = CurrentPlay.playlistItems.filter(
      (items) => items.contentDetails === id
    );
    setData(filterd);
  };

  return (
    <Container maxWidth={"lg"} sx={{ my: 5 }}>
      <Grid container spacing={2} alignContent={"center"}>
        <Grid size={8} sx={{ maxHeight: "sm" }}>
          <Stack spacing={2}>
            <Videoplayer data={data} />
          </Stack>
        </Grid>
        <Grid size={4}>
          {CurrentPlay.playlistItems.map((items) => (
            <PlaylistVideo
              thumbnail={items.thumbnail}
              title={items.title}
              handleVideoClick={handleVideoClick}
              content={items.contentDetails}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

const Notfound = () => {
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      <Typography variant="h2" align="center">
        404 Not Found
      </Typography>
    </Container>
  );
};

const App = () => {
  const { playlists, getPlaylistById } = usePlaylists();

  const playlistArray = Object.values(playlists);

  return (
    <>
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
