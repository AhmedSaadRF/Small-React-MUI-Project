import { Box } from "@mui/material";
import Appbar from "MUI-components/Appbar";
import Drawerr from "MUI-components/Drawerr";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { teal, grey } from "@mui/material/colors";

export default function root() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mode, setMyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  ); // Example state for mode

  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            ahmed: {
              main: "#64748B",
            },
            listBG: {
              main: grey[300],
            },
          }
        : {
            // palette values for dark mode
            ahmed: {
              main: teal[500],
            },
            listBG: {
              main: grey[800],
            },
          }),
    },
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [noneORblock, setnoneORblock] = useState("none");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [drawerType, setdrawerType] = useState("permanent");

  const showDrawer = () => {
    setdrawerType("temporary");
    setnoneORblock("block");
  };

  const hideDrawer = () => {
    setdrawerType("permanent");
    setnoneORblock("none");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Appbar showDrawer={showDrawer} />
        <Drawerr
          setmyMode={setMyMode}
          noneORblock={noneORblock}
          drawerType={drawerType}
          hideDrawer={hideDrawer}
        />
        <Box
          component="main"
          sx={{
            ml: { sm: "240px" },
            display: "flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
}
