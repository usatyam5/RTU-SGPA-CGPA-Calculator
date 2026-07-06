import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography, Box, Divider, Button } from '@mui/material';
import { useTheme } from '@emotion/react';
import { SemToCredits } from './sgpaItems/Credits';
import Subjects from './sgpaItems/Subjects';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 350,
    },
  },
};


function Sgpa() {
  const theme = useTheme()
  const [sem, setSem] = React.useState(1);
  const [selectedComponent, setSelectedComponent] = React.useState(1);

  const handleChangeSem = (event) => {
    setSem(event.target.value);
    setSelectedComponent(event.target.value)
  };

  const Semester = {
    1: "1st Semester",
    2: "2nd Semester",
    3: "3rd Semester",
    4: "4th Semester",
    5: "5th Semester",
    6: "6th Semester",
    7: "7th Semester",
    8: "8th Semester",
  }
  // const SemesterComponents = {
  //   1: <FirstSem />,
  //   2: ,
  //   3: "3rd Semester",
  //   4: "4th Semester",
  //   5: "5th Semester",
  //   6: "6th Semester",
  //   7: "7th Semester",
  //   8: "8th Semester",
  // }

  // const SelectedComponent = SemesterComponents[selectedComponent] || null;
  return (
    <>
      <Box sx={{
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}>

        <Typography variant="h4" component="h2" sx={{ fontFamily: 'inherit', mt: 3, fontWeight: "600", textAlign: 'center' }}>
          Sgpa Calulator
        </Typography>

        <FormControl sx={{
          mt: 3,
          width: {
            xs: '90%', // Set width to 100% for extra-small screens
            sm: '80%',  // Set width to 80% for small screens
            md: '70%',  // Set width to 70% for medium screens
            lg: '60%',  // Set width to 60% for large screens
            xl: '70%',  // Set width to 50% for extra-large screens
          },

        }} size='small'>
          <InputLabel
            sx={{
              "&.Mui-focused": {
                color: theme.palette.inputText.primary, // Change label color when focused
              },
              fontWeight: 'bold'
            }}>Select Semester</InputLabel>
          <Select
            // labelId="demo-simple-select-autowidth-label"
            // id="demo-simple-select-autowidth"
            value={sem}
            onChange={handleChangeSem}
            autoWidth
            label="Select Semester"
            MenuProps={MenuProps}
            sx={{
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.inputBorder.primary,
              },
              height: "50px",

            }}
          >
            {Object.entries(Semester).map(([key, value]) => (
              <MenuItem key={key} value={key}>{value}</MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <p>Total Credits : {SemToCredits[sem].totalCredits}</p>


        <Divider sx={{ m: 3, width: '100%' }} />
      </Box>




      <Box sx={{ width: '100%', }}>
            <Subjects semName={sem}/>
      </Box>
      

    </>
  );
}

export default Sgpa
