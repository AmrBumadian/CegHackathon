import PointCard from "./PointCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {ReactSession} from 'react-client-session';
import { useState,useEffect } from "react";
import Navbar from "../Navbar";

const AllPoints = ({history}) => {
  //on opening the page this data should be fetched from the backend
  const [points, setPoints] = useState([]);

  useEffect(() => {
      
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("https://us-central1-cegedim-1d756.cloudfunctions.net/locations", requestOptions)
      .then((response) => response.json())
      .then((data)=>{
        console.log(data);
        setPoints(data);
      })
      .catch((error) => console.log("error", error));
   },[]);

  return (
    <div>
    <Navbar history={history} />
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundImage: {
          flex: 1,
          resizeMode: "cover", // or 'stretch'
        },
        backgroundImage: `url(${"https://images.unsplash.com/photo-1623867822001-7fb160bb22a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}`,
      }}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ backgroundImage: `url(${Image})` }}
      >
        {points.map((point) => {
          return (
            <Grid item xs={2} sm={4} md={4}>

              <PointCard point={point} url={"https://us-central1-cegedim-1d756.cloudfunctions.net/"+"bookings/"+point.id}/>
            </Grid>
          );
        })}
      </Grid>
    </Box>
    </div>
  );
};

export default AllPoints;
