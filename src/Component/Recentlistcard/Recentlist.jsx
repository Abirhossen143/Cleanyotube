import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useStoreActions } from "easy-peasy";
import React from "react";
import { Link } from "react-router-dom";

const Recentlist = ({
  channelTitle,
  playlistThumbnail,
  playlistTitle,
  playlistId,
}) => {
  const RecentlistAction = useStoreActions((action) => action.recent);
  const deleteRecent = (playlistId) => {
    RecentlistAction.removeRecent(playlistId);
  };
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: 1,
      }}
    >
      <CardMedia
        component="img"
        image={playlistThumbnail.url}
        alt={playlistTitle}
      />
      <CardContent>
        <Typography variant="h6" color="text.primary">
          {`${
            playlistTitle.length > 50
              ? playlistTitle.substr(0, 50) + "..."
              : playlistTitle
          }`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {channelTitle}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }}></Box>
      <CardActions disableSpacing></CardActions>
      <Container sx={{ display: "flex" }}>
        <Button to={`/player/${playlistId}`} component={Link}>
          Start Recent
        </Button>
        <Button onClick={() => deleteRecent(playlistId)}>Remove Recent</Button>
      </Container>
    </Card>
  );
};

export default Recentlist;
