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
import { Link } from "react-router-dom";

const FavlistCard = ({
  channelTitle,
  playlistThumbnail,
  playlistTitle,
  playlistId,
}) => {
  const FavlistAction = useStoreActions((action) => action.favourite);
  const deleteFav = (playlistId) => {
    FavlistAction.removeFav(playlistId);
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
          Start Favourite
        </Button>
        <Button onClick={() => deleteFav(playlistId)}>Remove Fav</Button>
      </Container>
    </Card>
  );
};

export default FavlistCard;
