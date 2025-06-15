import { Box, Button, InputAdornment, TextField } from "@mui/material";
import "./Create.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    // Get existing expenses from localStorage
    const existingData = JSON.parse(localStorage.getItem("expenses")) || [];

    // Create new expense object
    const newExpense = {
      id: Date.now(), // Unique ID
      title: title.trim(),
      price: Number(price),
      date: new Date().toISOString().split("T")[0], // Current date
    };

    // Update data
    const updatedData = [...existingData, newExpense];

    // Save to localStorage
    localStorage.setItem("expenses", JSON.stringify(updatedData));

    // Navigate to home
    navigate("/");
  };

  return (
    <Box
      onSubmit={handleSubmit}
      autoComplete="off"
      component="form"
      sx={{ width: "380px" }}
    >
      <TextField
        autoComplete="off"
        onChange={(e) => settitle(e.target.value)}
        value={title}
        fullWidth
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">&#128073;</InputAdornment>
            ),
          },
        }}
        variant="filled"
      />

      <br />

      <TextField
        autoComplete="off"        
        value={price}
        onChange={(e) => setprice(e.target.value)}
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

      <Button
        type="submit"
        variant="contained"
        fullWidth
        size="large"
        sx={{ py: 1.5, fontWeight: 600, mt: "22px" }}
      >
        Submit
      </Button>
    </Box>
  );
}
