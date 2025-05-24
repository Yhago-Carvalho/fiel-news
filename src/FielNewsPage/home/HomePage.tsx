import { Box } from "@mui/material";
import Header from "./Header";
import VideoSection from "./VideosSection";
import NewsSession from "./NewsSession";

interface HomePageProps {
  fanTokenPrice: string | null;
}

export const HomePage = ({ fanTokenPrice }: HomePageProps) => {
  return (
    <Box>
      <Header fanTokenPrice={fanTokenPrice} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "64px",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('/background.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
            zIndex: -1,
          }}
        />

        <Box display="grid" gridTemplateColumns="1fr 1fr" width="100%">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              height: "100%",
              paddingTop: "24px",
            }}
          >
            <VideoSection />
          </Box>

          <Box>
            <NewsSession />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
