import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { BUY_TICKETS, OFFICIAL_WEBSITE, TITLE } from "./messages";

const Header = () => {
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
          <Box>
            <IconButton
              href="https://www.instagram.com/corinthians/"
              target="_blank"
              sx={{ color: "black" }}
            >
              <InstagramIcon />
            </IconButton>
            <Button
              href="https://www.corinthians.com.br/"
              target="_blank"
              sx={{ color: "black" }}
            >
              {OFFICIAL_WEBSITE}
            </Button>
            <Button
              href="https://www.fieltorcedor.com.br/"
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
