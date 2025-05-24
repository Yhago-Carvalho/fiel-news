import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BUY_FAN_TOKEN_LINK } from "./constants";
import { BUY_TOKEN_LABEL, FAN_TOKEN_LABEL } from "../messages";

interface FanTokenPriceProps {
  price: string | null;
}

const FanTokenPrice = ({ price }: FanTokenPriceProps) => {
  if (!price) return null;

  return (
    <Box
      sx={{
        backgroundColor: "#e0f2f1",
        borderRadius: "8px",
        px: 1,
        py: 0.5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mr: 2,
      }}
    >
      <Typography sx={{ color: "black", fontSize: "0.75rem" }}>
        {FAN_TOKEN_LABEL} {price}
      </Typography>
      <Button
        href={BUY_FAN_TOKEN_LINK}
        target="_blank"
        sx={{
          color: "green",
          fontWeight: "bold",
          fontSize: "0.75rem",
          minWidth: "auto",
          p: 0,
        }}
      >
        {BUY_TOKEN_LABEL}
      </Button>
    </Box>
  );
};

export default FanTokenPrice;
