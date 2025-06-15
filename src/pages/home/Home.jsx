import { Box, IconButton, Paper, Typography } from "@mui/material";
import "./Home.css";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function Home() {
  const [mydata, setmydata] = useState([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("expenses")) || [];
    setmydata(storedData);
  }, []);

  const handleDelete = (item) => {
    // Create new array without the deleted item
    const newArr = mydata.filter(myObject => myObject.id !== item.id);
    
    // Update state
    setmydata(newArr);
    
    // Update localStorage with modified array
    localStorage.setItem("expenses", JSON.stringify(newArr));
  };

  // Calculate total price
  const totalPrice = mydata.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box>
      {mydata.map((item) => (
        <Paper
          key={item.id}
          sx={{
            position: "relative",
            width: "366px",
            display: "flex",
            justifyContent: "space-between",
            mt: "22px",
            pt: "27px",
            pb: "7px",
          }}
        >
          <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
            {item.title}
          </Typography>
          <Typography
            sx={{
              mr: "33px",
              fontWeight: 500,
              fontSize: "1.4em",
              opacity: "0.8",
            }}
            variant="h6"
          >
            ${item.price}
          </Typography>
          <IconButton
            onClick={() => handleDelete(item)}
            sx={{ position: "absolute", top: "0", right: "0" }}
          >
            <Close sx={{ fontSize: "20px" }} />
          </IconButton>
        </Paper>
      ))}

      <Typography mt="55px" textAlign="center" variant="h6">
        👉 You Spend ${totalPrice}
      </Typography>
    </Box>
  );
}
