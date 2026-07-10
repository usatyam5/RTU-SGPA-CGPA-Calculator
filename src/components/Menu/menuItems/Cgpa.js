import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography } from '@mui/material';
import { useTheme } from '@emotion/react';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};


function Cgpa() {
  const theme = useTheme()
  const [sem, setSem] = React.useState('');

  const handleChange = (event) => {
    setSem(event.target.value);
  };

  return (
    <>
      <Typography variant="h3" component="h2" sx={{ fontFamily: 'inherit', mt: "50px", fontWeight: "600", textAlign: 'center' }}>
        Cgpa Calulator
      </Typography>

      <FormControl sx={{ m: 6, minWidth: '300px' }} size='small'>
        <InputLabel id="demo-simple-select-asutowidth-label"
          sx={{
            "&.Mui-focused": {
              color: theme.palette.inputText.primary, // Change label color when focused
            },
            fontWeight: 'bold'
          }}>Select Semester</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={sem}
          onChange={handleChange}
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
          <MenuItem value="">None</MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default Cgpa
