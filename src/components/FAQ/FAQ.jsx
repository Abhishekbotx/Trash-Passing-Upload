import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';




const FAQ = () => {
  const CustomAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: 'black', // Tailwind's slate-950 color
  }));
  
  const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
  }));
  
  const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    backgroundColor: '#black',
    color: 'white',
  }));
  
  const CustomExpandMoreIcon = styled(ExpandMoreIcon)(({ theme }) => ({
     // Adjust spacing as needed
    color:'white',
    

  }));
  return (
    <div className=' px-10 min-h-[78vh] bg-black flex flex-col pb-4'>
      <div>
        <h1 className='text-white raleway mb-8 text-center text-4xl mt-7'>
          Frequently Asked Questions (FAQ’s)
        </h1>
      </div>
      <CustomAccordion defaultExpanded>
        <CustomAccordionSummary
          expandIcon={<CustomExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>1. How does the machine work?</Typography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography>
            The waste management machine features six separate compartments for different types of waste: wet, dry, paper, plastic, e-waste, and sanitary waste. Residents can easily deposit waste into the appropriate color-coded drawer. The machine automatically seals the garbage bags and channels the waste through a tunnel pipe system to a central dumpster in the building for proper disposal and recycling.
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>
      
      <CustomAccordion>
        <CustomAccordionSummary
          expandIcon={<CustomExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>2. What types of waste can the machine handle?</Typography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography>
            The waste management machine features six separate compartments for different types of waste: wet, dry, paper, plastic, e-waste, and sanitary waste. Residents can easily deposit waste into the appropriate color-coded drawer. The machine automatically seals the garbage bags and channels the waste through a tunnel pipe system to a central dumpster in the building for proper disposal and recycling.
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>

      <CustomAccordion>
        <CustomAccordionSummary
          expandIcon={<CustomExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>3. How easy is it to use the machine?</Typography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography>
            The waste management machine features six separate compartments for different types of waste: wet, dry, paper, plastic, e-waste, and sanitary waste. Residents can easily deposit waste into the appropriate color-coded drawer. The machine automatically seals the garbage bags and channels the waste through a tunnel pipe system to a central dumpster in the building for proper disposal and recycling.
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>

      <CustomAccordion>
        <CustomAccordionSummary
          expandIcon={<CustomExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>4. How much space does the machine take up?</Typography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography>
            The waste management machine features six separate compartments for different types of waste: wet, dry, paper, plastic, e-waste, and sanitary waste. Residents can easily deposit waste into the appropriate color-coded drawer. The machine automatically seals the garbage bags and channels the waste through a tunnel pipe system to a central dumpster in the building for proper disposal and recycling.
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>

      <CustomAccordion>
        <CustomAccordionSummary
          expandIcon={<CustomExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography>5. Is the machine environmentally friendly?</Typography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography>
            The waste management machine features six separate compartments for different types of waste: wet, dry, paper, plastic, e-waste, and sanitary waste. Residents can easily deposit waste into the appropriate color-coded drawer. The machine automatically seals the garbage bags and channels the waste through a tunnel pipe system to a central dumpster in the building for proper disposal and recycling.
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>
    </div>
  );
}

export default FAQ;
