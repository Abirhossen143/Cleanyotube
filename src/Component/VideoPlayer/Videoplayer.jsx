import { Card, Container } from "@mui/material";
import YouTube from "react-youtube";

const Videoplayer = ({ data }) => {
  const mapvideoId = data.map((items) => items.contentDetails.videoId);
  const VideoId = mapvideoId.toString();

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      controls: 1,
      rel: 0,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <Card>
      <YouTube opts={opts} videoId={VideoId} onReady={onReady} />
    </Card>
  );
};

export default Videoplayer;
