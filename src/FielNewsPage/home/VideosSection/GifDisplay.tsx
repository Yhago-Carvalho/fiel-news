import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GifDisplay = () => {
  const { basePath } = useRouter();
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(`${basePath}/taca_mundial_2012.gif`);
  }, [basePath]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "40vh",
        backgroundImage: `url('${path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
      }}
    />
  );
};

export default GifDisplay;
