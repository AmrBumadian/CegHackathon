import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import SlotCard from "./SlotCard";
import { useState,useEffect } from "react";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        background: `linear-gradient(to left,${"#006666"}, ${"gray"})`
    };
}
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
export default function PointSlots({url}) {
      const [slots,setSlots] = React.useState([]);
      
   
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);


    const handleOpen = () => {
        setOpen(true);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };
        fetch(url, requestOptions)
          .then((response) => response.json())
          .then((data)=>{
            console.log(data);
            setSlots(data);          
          })
          .catch((error) => console.log("error", error));
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div >
            <Button 
                variant="contained"
                disableElevation
                style={{
                  color:"white",
                  backgroundColor: "#006666",
                  border: "solid",
                  marginRight: 10,
                }}
            onClick={handleOpen}>
               Slots
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
        <div style={modalStyle} className={classes.paper}>
        
          <Typography paragraph sx={{marginLeft:20 ,color:"white" }}>Point Slots</Typography>
          
          
         
         {slots.map((slot) => (
           <List sx={{ width: "100%", maxWidth: 360, color: "white", backgroundColor:"rgb(41,188,171,.47)" }}>
             <ListItem>
             {/* slot.currentReservation < slot.capacity && */}
           { <SlotCard slot={slot} />}  
           
             </ListItem>
             <Divider />
           </List>
         ))}
            
        
         </div>
               
          
            </Modal>
        </div>
    );
}