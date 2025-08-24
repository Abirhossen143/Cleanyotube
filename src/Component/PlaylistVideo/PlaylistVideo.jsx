import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

const PlaylistVideo = ({ thumbnail, title, handleVideoClick, content }) => {
  return (
    <Card>
      <CardMedia component="img" image={thumbnail.url} alt={title} />
      <CardContent>
        <Typography variant="h6" color="text.primary">
          {`${title.length > 50 ? title.substr(0, 50) + "..." : title}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleVideoClick(content)}>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Typography variant="body2" fontWeight={600}>
              Start Video
            </Typography>
          </Stack>
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaylistVideo;
