import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PointSlots from "./PointSlots";
import Rating from '@mui/material/Rating';
import Box from "@mui/material/Box";
import Button from '@material-ui/core/Button';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { ReactSession } from 'react-client-session';
import Grid from "@mui/material/Grid";

export default function PointCard({ point }) {
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState(2);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleMap = () => {
    console.log("google map")
};

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "rgba(56, 89, 85, 0.36)",
        color: "white",
      }}
    >
      <CardHeader
        sx={{ color: "white", fontStyle: "bold" }}
        avatar={
          <Avatar sx={{ bgcolor: "#009999" }} aria-label="recipe">
            {point.id}
          </Avatar>
        }
        title={point.title}
        subheader={
         
          <Typography style={{ color: "white", fontSize: 14 }}>
            {"Bio: "}
            {point.location} 
          </Typography>
         
         
        }

        
      />
   
      <CardContent>
      <Box
           sx={{
             '& > legend': { mt: 0 },
           }}
         >
           <Typography component="legend">Rate</Typography>
           <Rating
             name="simple-controlled"
             value={value}
             onChange={(event, newValue) => {
               setValue(newValue);
             }}
           />
           </Box>
        <Typography variant="body2" color="white">
        {"Phone Number: "}
            {point.phoneNumber}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <Typography style={{ color: "white", fontSize: 14 }}>
            {"open time: "}
            {point.openTime} 
            </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography style={{ color: "white", fontSize: 14 }}>
            {"close time: "}
            {point.closeTime}    
         
          </Typography>
          </Grid>
          </Grid>

          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <Typography style={{ color: "white", fontSize: 14 }}>
            {"Capacity: "}
            {point.capacity} 
            </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography style={{ color: "white", fontSize: 14 }}>
            {"Available doctors: "}
            {point.doctorsNum}             
          </Typography>
          </Grid>
          </Grid>
         
      </CardContent>
      <CardActions disableSpacing>
    
        <PointSlots slots={point.sports}  />
        <Button 
          endIcon={<MyLocationIcon />}
                variant="contained"
                disableElevation
                style={{
                  color:"white",
                  backgroundColor: "#006666",
                  border: "solid",
                  marginRight: 10,
                }}
            onClick={handleMap}>
                Open on Map
            </Button>
     
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ backgroundColor: "rgba(56, 89, 85, 0.36)" }}>
                 
        </CardContent>
      </Collapse>
    </Card>
  );
}
