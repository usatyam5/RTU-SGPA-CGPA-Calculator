import React from 'react'
import { Box, Tabs, Tab } from '@mui/material'

import { useTheme } from '@emotion/react'
import './MenuBar.css'
import Sgpa from './menuItems/Sgpa';
import Cgpa from './menuItems/Cgpa';


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


const MenuBar = () => {
  const theme = useTheme()
  const [value, setValue] = React.useState('sgpa');

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Box
      sx={{
        // width: '100%',
        width: {
          xs: '90%', // Set width to 100% for extra-small screens
          sm: '80%',  // Set width to 80% for small screens
          md: '70%',  // Set width to 70% for medium screens
          lg: '60%',  // Set width to 60% for large screens
          xl: '40%',  // Set width to 50% for extra-large screens
        },
        maxWidth: 'xxl',
        display: 'flex',
        flexDirection: 'column', // Set display to flex
        alignItems: 'center', // Center vertically
        height: 'auto',
        borderRadius: 5,
        bgcolor: 'primary.main',
        marginTop: theme.spacing(1),
        boxShadow: '1px 1px 15px rgba(0, 0, 0, 0.5)',
        mx: 'auto',
        mt: '20px',
        mb: 5
      }}
    >
      <Box sx={{
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}>

        <Tabs
          value={value}
          onChange={handleChangeTab}
          aria-label="wrapped label tabs example"
          TabIndicatorProps={{
            sx: {
              backgroundColor: theme.palette.text.primary,
            }
          }}
          sx={{
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Tab value="sgpa" label="SGPA" sx={{
            flex: 1,
            fontSize: '20px',
            color: theme.palette.inputText.primary,
            '&.Mui-selected': {
              color: theme.palette.text.primary,
            },
          }} />
          <Tab value="cgpa" label="CGPA" sx={{
            flex: 1,
            fontSize: '20px',
            color: theme.palette.inputText.primary,
            '&.Mui-selected': {
              color: theme.palette.text.primary,
            },
          }} />
        </Tabs>
        <Box sx={{ width: '100%', }}>
          {value === 'sgpa' ? <Sgpa /> : <Cgpa />}
        </Box>
      </Box>
    </Box >
  )
}

export default MenuBar