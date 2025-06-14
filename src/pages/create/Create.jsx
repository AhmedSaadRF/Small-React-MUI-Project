import { Box, Button, InputAdornment, styled, TextField } from "@mui/material"
import "./Create.css"
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.ahmed.main,
  '&:hover': {
    Scale: "0.9"
  },
}));

export default function Create() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const navigate = useNavigate();


  return (
    <Box autoComplete="off" component="form" sx={{ width: "380px" }}>
      <TextField 
        onChange={(e) => settitle(e.target.value)}
        fullWidth
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">&#128073;</InputAdornment>,
          },
        }}
        variant="filled"
      />

      <br />

      <TextField
        onChange={(e) => setprice(Number(e.target.value))}
        fullWidth
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
        variant="filled"
      />

      <ColorButton onClick={() => {
        fetch("../../data/db.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({price, title})
        }).then(() => {
          navigate("/");
        })
      }
      } sx={{mt: "22px"}} variant="contained">
        Submit 
        <ChevronRight />
      </ColorButton>
    </Box>
  )
}
