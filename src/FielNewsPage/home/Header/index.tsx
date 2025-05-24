import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { BUY_TICKETS, OFFICIAL_WEBSITE, TITLE } from "../messages";
import {
  CORINTHIANS_INSTAGRAN_LINK,
  CORINTHIANS_WEBSITE_LINK,
  FIEL_TORCEDOR_WEBSITE_LINK,
} from "./constants";
import FanTokenPrice from "./FanTokenPrice";

interface HeaderProps {
  fanTokenPrice: string | null;
}

const Header = ({ fanTokenPrice }: HeaderProps) => {
  return (
    <AppBar sx={{ backgroundColor: "gray" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "64px",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              {TITLE}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FanTokenPrice price={fanTokenPrice} />
            <IconButton
              href={CORINTHIANS_INSTAGRAN_LINK}
              target="_blank"
              sx={{ color: "black" }}
            >
              <InstagramIcon />
            </IconButton>

            <Button
              href={CORINTHIANS_WEBSITE_LINK}
              target="_blank"
              sx={{ color: "black" }}
            >
              {OFFICIAL_WEBSITE}
            </Button>
            <Button
              href={FIEL_TORCEDOR_WEBSITE_LINK}
              target="_blank"
              sx={{ color: "black" }}
            >
              {BUY_TICKETS}
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
