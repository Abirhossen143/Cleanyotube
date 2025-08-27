import { Box, Container, Grid } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Videoplayer from "../VideoPlayer/Videoplayer";
import PlaylistVideo from "../PlaylistVideo/PlaylistVideo";

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
    <Container sx={{ my: 5 }}>
      <Grid
        sx={{
          display: "flex",
          height: "100vh",
          overflow: "hidden",
        }}
        item
        xs={12}
        sm={6}
      >
        <Grid
          sx={{
            flex: 0.9,

            overflowY: "auto",
          }}
        >
          <Grid sx={{ p: 2 }} xs={6} sm={2}>
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
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            flex: 1.5,
          }}
          xs={6}
          sm={2}
        >
          <Box sx={{ p: 2 }}>
            <Videoplayer data={data} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default PlayerPage;
