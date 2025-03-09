import { Box } from "@mui/material";

const GifDisplay = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "40vh",
        backgroundImage: "url('/taca_mundial_2012.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
      }}
    />
  );
};

export default GifDisplay;
