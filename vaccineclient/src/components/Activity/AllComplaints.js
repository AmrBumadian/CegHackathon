import ComplainCard from "./ComplainCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState,useEffect } from "react";
import Navbar from "../Navbar";

const AllComplains = ({history}) => {
  //on opening the page this data should be fetched from the backend
  const [complains, setComplains] = useState([]);
  
   
  useEffect(() => {
   
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      fetch("https://us-central1-cegedim-1d756.cloudfunctions.net/complains"+"/Ntz2rdxDPWHoijPKPHLt", requestOptions)
        .then((response) => response.json())
        .then((data)=>{
          setComplains(data);
        })
        .catch((error) => console.log("error", error));
     },[]);
  return (
   

    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundImage: {
          flex: 1,
          resizeMode: "cover", // or 'stretch'
        },
        backgroundImage: `url(${"https://images.unsplash.com/photo-1612423950702-c86515507f7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}`,
      }}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ backgroundImage: `url(${Image})` }}
      >
        {complains.map((complain) => {
          return (
            <Grid item xs={2} sm={4} md={4}>
              <ComplainCard complain={complain} />
            </Grid>
          );
        })}
      </Grid>
    </Box>

  );
};

export default AllComplains;
