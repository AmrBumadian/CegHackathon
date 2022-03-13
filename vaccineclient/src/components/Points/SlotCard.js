import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import Button from '@material-ui/core/Button';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function SlotCard({slot }) {
  const [expanded, setExpanded] = React.useState('panel1');
  const[isDisabled,setDisable] = React.useState(slot.currentReservation >=  slot.capacity);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleReserve = () => {
    console.log("google map")
};
  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{"Slot"}</Typography>
         
       
         
        </AccordionSummary>
        <AccordionDetails>
        <Typography >{slot.startTime+ " to " +slot.endTime}</Typography>
          <Typography>
            {"Number of reservation "+ slot.currentReservation +" out of  "+ slot.capacity}
          </Typography>
        {isDisabled && <Button 
          endIcon={<BookmarkAddedIcon />}
                variant="contained"
                
                 disabled 
                style={{
                  color:"white",
                  backgroundColor: "rgb(142,196,163,.8)",
                  border: "solid",
                  marginRight: 10,

                }}
            onClick={handleReserve}>
                Reserve
            </Button>}
            {!isDisabled && <Button 
          endIcon={<BookmarkAddedIcon />}
                variant="contained"
                
                //  disabled = {isDisabled}
                style={{
                  color:"white",
                  backgroundColor: "#006666",
                  border: "solid",
                  marginRight: 10,

                }}
            onClick={handleReserve}>
                Reserve
            </Button>}
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
