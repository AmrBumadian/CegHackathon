import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {useNavigate} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Profile from "./Profile/Profile";
import { ReactSession } from "react-client-session";

export default function TopMenu({ navigate }) {
  const route = useNavigate();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleRoute = (text) => {
    if (text === "About") {
      route("/");
     } 
    else if (text === "Points") {
      route("/Points");
    } else if (text === "Complains") {
      route("/Complains");
    } 
    else if (text === "Sign out") {
      sessionStorage.clear();
      route("/");
    }
  }
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ bgcolor: "#00CCCC" }}>
        {["About", "Points", "Complains", "Sign out"].map(
          (text, index) => (
            <ListItem
              button
              key={text}
              // sx={{ bgcolor: '#8B8B8B' }}
              onClick={() => handleRoute(text)}
            >
              <ListItemIcon>
                <FitnessCenterIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
        {typeof ReactSession.get("user") !== "undefined" && (
          <ListItem
            button
            // sx={{ bgcolor: '#8B8B8B' }}
            onClick={() => handleRoute("Sign out")}
          >
            <ListItemIcon>
              <FitnessCenterIcon />
            </ListItemIcon>
            <ListItemText primary="Sign out" />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer("top", true)}
      >
        <MenuIcon />
      </IconButton>{" "}
      <Drawer
        anchor="top"
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        {typeof ReactSession.get("user") !== "undefined" && <Profile />}
        {list("top")}
      </Drawer>
    </div>
  );
}
