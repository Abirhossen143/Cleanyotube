import { Container, Grid } from "@mui/material";
import { useStoreState } from "easy-peasy";
import React from "react";

import Recentlist from "../Recentlistcard/Recentlist";

const Recent = () => {
  const RecentlistState = useStoreState((state) => state.recent);
  return (
    <Container maxWidth={"lg"} sx={{ my: 5 }}>
      {RecentlistState.items.length > 0 && (
        <Grid container alignItems={"stretch"}>
          {RecentlistState.items.map((item) => (
            <Grid item xs={12} md={6} lg={5} mb={2}>
              <Recentlist
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

export default Recent;
