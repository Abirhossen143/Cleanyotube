import { Container, Grid } from "@mui/material";
import PlaylistCardItem from "../playlistcard";

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
export default Homepage;
