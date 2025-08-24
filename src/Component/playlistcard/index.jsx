import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import { useState } from "react";

const PlaylistCardItem = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
  playlistId,
  item,
}) => {
  const FavlistAction = useStoreActions((action) => action.favourite);
  const DatalistAction = useStoreActions((action) => action.playlist);
  const RecentlistAction = useStoreActions((action) => action.recent);
  const [hasAdded, setHasAdded] = useState([]);
  const [hasRecent, setHasRecent] = useState([]);
  const addtoFavorites = (item) => {
    const alreadyExist = hasAdded.some(
      (fav) => fav.playlistId === item.playlistId
    );

    if (alreadyExist) {
      alert("This Already Fav");
      return;
    }
    FavlistAction.Addfav(item);
    setHasAdded([...hasAdded, item]);
  };
  const addtoRecent = (item) => {
    const alreadyExistRec = hasRecent.some(
      (fav) => fav.playlistId === item.playlistId
    );

    if (alreadyExistRec) {
      alert("This Already in Recent");
      return;
    }
    RecentlistAction.AddRecent(item);
    setHasRecent([...hasRecent, item]);
  };

  const DeleteData = (playlistId) => {
    DatalistAction.removeData(playlistId);
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
      <CardActions disableSpacing>
        <Button to={`/player/${playlistId}`} component={Link}>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Typography variant="body2" fontWeight={600}>
              Start Tutorial
            </Typography>
          </Stack>
        </Button>
        <Button onClick={() => addtoRecent(item)}>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Typography variant="body2" fontWeight={600}>
              Add To Recent
            </Typography>
          </Stack>
        </Button>
        <Button onClick={() => addtoFavorites(item)} to={"/Fav-list/fav"}>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Typography variant="body2" fontWeight={600}>
              Add To Fav
            </Typography>
          </Stack>
        </Button>
        <Button onClick={() => DeleteData(playlistId)}>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Typography variant="body2" fontWeight={600}>
              Delete
            </Typography>
          </Stack>
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaylistCardItem;
