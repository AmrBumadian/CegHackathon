import DoctorCard from "./DoctorCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState,useEffect } from "react";
import Navbar from "../Navbar";

const AllDoctorChats = ({history}) => {
  //on opening the page this data should be fetched from the backend
  const [doctorChats, setDoctorChats] = useState([]);
  const docotorChats = [
    {
      id: 1,
      title: "I have 40 c heat",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      solution:
        "abnormal"
    },
    {
      id: 2,
      title: "I have headache",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    solution:
    "Normal"
      },
    {
      id: 3,
      title: "I need to go sport",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 3,
      title: "I have to travel ",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id:4,
      title: "I have algery what type of vaccine to take",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",
      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 5,
      title: "I have headache for 5 days continously",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
  ];
 useEffect(() => {
     setDoctorChats(docotorChats);
  //     var myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/json");
  //     var requestOptions = {
  //       method: "GET",
  //       headers: myHeaders,
  //       redirect: "follow",
  //     };
  //     fetch("http://localhost:8082/api/static/tips/work-out", requestOptions)
  //       .then((response) => response.json())
  //       .then((data)=>{
  //         for(var i = 0; i < data.length; i++){
  //             data[i].id = i + 1;
  //         }
  //         setWorkOutTips(data);
  //       })
  //       .catch((error) => console.log("error", error));
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
        {doctorChats.map((chat) => {
          return (
            <Grid item xs={2} sm={4} md={4}>
              <DoctorCard chat={chat} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  

  );
};

export default AllDoctorChats;
