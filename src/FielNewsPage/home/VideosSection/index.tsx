import { Box } from "@mui/material";
import GifDisplay from "./GifDisplay";
import YoutubeVideoList from "./YoutubeVideoList";

const VideoSection = () => {
  return (
    <Box
      sx={{
        maxWidth: "80%",
        width: "auto",
        height: "auto",
      }}
    >
      <GifDisplay />
      <YoutubeVideoList />
    </Box>
  );
};

export default VideoSection;
