import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Profile from "./Profile/Profile";
import {useNavigate} from "react-router-dom"
import AssignmentIndSharpIcon from "@mui/icons-material/AssignmentIndSharp";
import TopMenu from "./TopMenu";
import {ReactSession} from 'react-client-session';

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#000033",
  backgroundColor: "#ffffff",
  "&:hover": {
    color: "#ffffff",
    backgroundColor: "#009999",
  },
}));
export default function Navbar({ navigate }) {
  //const [currentUser, setCurrentUser] = useState(ReactSession.get("userId"));
  const route = useNavigate();
  const handleRoute = (text) => {
    if (text === "Registration") {
      route("/Registration");
    } else route("/");
  };
  //this.forceUpdate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#009999" }}>
        <Toolbar>
          <TopMenu navigate={navigate} />
          <Button
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } ,color:"white"}}
            onClick={() => handleRoute("")}
          >
            Vaccination Point Website
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {typeof ReactSession.get("user") === "undefined" && 
              <ColorButton
              
                  startIcon={<AssignmentIndSharpIcon />}
                  onClick={() => handleRoute("Registration")}
                >
                  {" "}
                  Registration
                </ColorButton>
          }
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
