import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button onClick={() => navigate("/")} color="inherit" size="large">
            Go Home
          </Button>
          <Button
            sx={{ position: "absolute", right: 25 }}
            onClick={() => navigate("add-form")}
            variant="outlined"
            color="inherit"
          >
            Add Form
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
