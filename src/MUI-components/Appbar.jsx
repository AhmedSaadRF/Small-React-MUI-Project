import Typography from "@mui/material/Typography";
import { AppBar, Avatar, IconButton, Link, Toolbar } from "@mui/material";
import { Menu } from "@mui/icons-material";

export default function Appbar({ showDrawer }) {
  return (
    <AppBar
      position="static"
      sx={{ width: { sm: `calc(100% - 240px)` }, ml: { xs: 0, sm: `240px` } }}
    >
      <Toolbar>
        <IconButton
          onClick={() => {
            showDrawer();
          }}
          sx={{ display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Link
          href="/"
          color="inherit"
          underline="none"
          sx={{ flexGrow: 1, "&:hover": { fontSize: "16.5px" } }}
        >
          My expenses
        </Link>
        <Typography variant="body1" color="inherit" mr={2}>
          Ahmed Saad
        </Typography>
        <Avatar alt="Remy Sharp" src="./images/1704637099130.jpg" />
      </Toolbar>
    </AppBar>
  );
}
