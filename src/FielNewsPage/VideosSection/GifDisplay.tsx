import { Box } from "@mui/material";
import { useRouter } from "next/router";

const GifDisplay = () => {
  const { basePath } = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        height: "40vh",
        backgroundImage: `url('${basePath}/taca_mundial_2012.gif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
      }}
    />
  );
};

export default GifDisplay;
