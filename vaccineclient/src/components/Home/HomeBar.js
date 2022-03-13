import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const HomeBar = ({ navigate }) => {
  const route = useNavigate();
  const pages = ["About", "Points", "Complains"];
  const handleRoute = (text) => {
    if (text === "Points") {
      route("/Points");
    } else if (text === "Complains") {
      route("/Complains");
    } 
  
  };
  return (
    <div style={{ position: "static" }}>
      <Box sx={{ flexGrow: 1 }} />
      <AppBar position="static" style={{ backgroundColor: "#009999", color:"white" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" ,marginLeft:'60px'}}
                onClick={() => handleRoute(page)}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HomeBar;
