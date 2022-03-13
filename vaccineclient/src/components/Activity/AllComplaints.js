import ComplainCard from "./ComplainCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState,useEffect } from "react";
import Navbar from "../Navbar";

const AllComplains = ({history}) => {
  //on opening the page this data should be fetched from the backend
  const [complains, setComplains] = useState([]);
  const complainsData = [
    {
      id: 1,
      title: "The vaccine type",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      solution:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 2,
      title: "The date missed",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 3,
      title: "The queue delay is large",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 4,
      title: "Change the gov 20 number",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 5,
      title: "data missmatch",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 6,
      title: "Do n't need vaccine any more",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
  ];
  useEffect(() => {
   setComplains(complainsData);
  //     var myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/json");
  //     var requestOptions = {
  //       method: "GET",
  //       headers: myHeaders,
  //       redirect: "follow",
  //     };
  //     fetch("http://localhost:8082/api/static/tips/health", requestOptions)
  //       .then((response) => response.json())
  //       .then((data)=>{
  //         setHealthTips(data);
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
