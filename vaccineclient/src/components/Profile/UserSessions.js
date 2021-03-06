import * as React from "react";
import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import BoltIcon from "@mui/icons-material/Bolt";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {ReactSession} from 'react-client-session';
//import Sessions from "./Sessions";

export default function UserSessions({Sessions}) {
  const [sessions, setSessions] = useState(Sessions);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#050F46" }}>
      {sessions.map((session) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#cc1b85" }}>
              <BoltIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={session.name} secondary={session.date} />
        </ListItem>
      ))}
    </List>
  );
}
