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
    <Grid
      spacing={2}
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Grid
        sx={{
          flex: 0.6,
          overflowY: "auto",
        }}
      >
        <Grid sx={{ p: 2 }}>
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
      >
        <Box sx={{ p: 2 }}>
          <Videoplayer data={data} />
        </Box>
      </Grid>
    </Grid>
  );
};
export default PlayerPage;
