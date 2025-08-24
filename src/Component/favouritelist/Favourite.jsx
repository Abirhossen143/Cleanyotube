import { Container, Grid } from "@mui/material";
import { useStoreState } from "easy-peasy";
import PlaylistCardItem from "./../playlistcard/index";
import FavlistCard from "../FavllistCard/FavlistCard";

const Favourite = () => {
  const FavlistState = useStoreState((state) => state.favourite);
  return (
    <Container maxWidth={"lg"} sx={{ my: 5 }}>
      {FavlistState.items.length > 0 && (
        <Grid container alignItems={"stretch"}>
          {FavlistState.items.map((item) => (
            <Grid item xs={12} md={6} lg={5} mb={2}>
              <FavlistCard
                key={item.playlistId}
                playlistId={item.playlistId}
                playlistThumbnail={item.playlistThumbnail}
                playlistTitle={item.playlistTitle}
                channelTitle={item.channelTitle}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Favourite;
