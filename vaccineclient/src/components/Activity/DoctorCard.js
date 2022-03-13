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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from '@material-ui/core/Button';
import Grid from "@mui/material/Grid";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DoctorCard({ chat }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleReserve = () => {
    setExpanded(!expanded);
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
            {chat.id}
          </Avatar>
        }
        title={chat.title}
      />
      <CardContent>
        <Typography variant="body2" color="white">
          {chat.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show Reply"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ backgroundColor: "rgba(56, 89, 85, 0.36)" }}>
          <div>
          <Typography paragraph>Replay</Typography>

          <Typography paragraph>{chat.solution}</Typography>
          {chat.isNormal&&
           <Grid container spacing={2}>
           <Grid item xs={12} sm={6}>
           <Button 
         
                variant="contained"
                disableElevation
                style={{
                  color:"white",
                  backgroundColor: "#006666",
                  border: "solid",
                  marginRight: 10,
                }}
                onClick={handleReserve}>
                Reserve clinic
                </Button> 
                </Grid>
           
            <Grid item xs={12} sm={6}>
            <Button 
         
         variant="contained"
         disableElevation
         style={{
           color:"white",
           backgroundColor: "#006666",
           border: "solid",
           marginRight: 10,
         }}
         onClick={handleReserve}>
         Go vezzetta
     </Button>
             </Grid>
             
                    
           </Grid>
 
          }
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
