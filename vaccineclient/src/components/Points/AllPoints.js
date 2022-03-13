import PointCard from "./PointCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {ReactSession} from 'react-client-session';
import { useState,useEffect } from "react";
import Navbar from "../Navbar";

const AllPoints = ({history}) => {
  //on opening the page this data should be fetched from the backend
  const [points, setPoints] = useState([]);
  const data = [{id:1 , title:"shq " , openTime :"10 am " , closeTime :"8 pm " ,location:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{number:"slot 1",currentReservation:"2" , totalCapacity:"4" ,duration:"10 am to 11 am"},{number:"slot 2",sport:"fittness"},{number:"slot 3",sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:2 , name:"Tarek Ashor" , location:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:3 , name:"Tarek Ashor" , location:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:4 , name:"Tarek Ashor" , location:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:5 , name:"Tarek Ashor" , location:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:6 , name:"Tarek Ashor" , location:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:7 , name:"Tarek Ashor" , location:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:8 , name:"Tarek Ashor" , location:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:9 , name:"Tarek Ashor" , bio:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:10 , name:"Tarek Ashor" , bio:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] }]

  useEffect(() => {
      setPoints(data);
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     var requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };
//     fetch("http://localhost:8082/api/static/trainers", requestOptions)
//       .then((response) => response.json())
//       .then((data)=>{
//        // s etTrainers(data);
//       })
//       .catch((error) => console.log("error", error));
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
              <PointCard point={point} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
    </div>
  );
};

export default AllPoints;
