import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person2,
  Settings,
} from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  IconButton,
  Box,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function Drawerr({
  setmyMode,
  noneORblock,
  drawerType,
  hideDrawer,
}) {
  const currentLocation = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const myList = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "Create", icon: <Create />, path: "/Create" },
    { text: "Profile", icon: <Person2 />, path: "/Profile" },
    { text: "Settings", icon: <Settings />, path: "/Settings" },
    { text: "Logout", icon: <Logout />, path: "/Logout" },
  ];

  return (
    <Box component="nav">
      <Drawer
        sx={{
          display: { xs: noneORblock, sm: "block" },
          width: "240px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "240px",
            boxSizing: "border-box",
          },
        }}
        variant={drawerType}
        anchor="left"
        open={true}
        onClose={() => {
          hideDrawer();
        }}
      >
        <List>
          <ListItem
            sx={{ display: "flex", justifyContent: "center", mb: "14px" }}
            disablePadding
          >
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setmyMode(theme.palette.mode === "dark" ? "light" : "dark");
              }}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 sx={{ color: "orange" }} />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          </ListItem>

          <Divider />

          {myList.map((item) => {
            return (
              <ListItem
                key={item.text}
                sx={{
                  bgcolor:
                    currentLocation.pathname === item.path
                      ? // @ts-ignore
                      theme.palette.listBG.main
                      : null,
                }}
                disablePadding
              >
                <ListItemButton onClick={() => navigate(item.path)}>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}

        </List>
      </Drawer>
    </Box>
  );
}
