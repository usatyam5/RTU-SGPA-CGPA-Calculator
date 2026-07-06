import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography, Box, Divider, Button } from '@mui/material';
import { useTheme } from '@emotion/react';
import { SemToCredits } from './Credits';
import GradePoints from './GradesPoints';


const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            maxWidth: 360,
            width: 400,
        },
    },
};

function Subjects({ semName }) {
    const theme = useTheme()
    const [sem, setSem] = useState(semName);
    const [formData, setFormData] = useState([]);
    const [grade, setGrade] = useState('')
    const [result, setResult] = useState(0)

    useEffect(() => {
        setFormData({})
    }, [semName])

    const handleChange = (e, subject, credits) => {
        const { value } = e.target;
        const updatedFormData = {
            ...formData,
            [subject]: { grade: value, credits },
        };
        setFormData(updatedFormData);
    };

    const handleSubmit = () => {
        let totalGradePoints = 0
        let totalCreditPoints = SemToCredits[semName - 1].totalCredits
        Object.entries(formData).forEach(([subject, { grade, credits }]) => {
            const pointsScored = GradePoints[grade] * credits
            totalGradePoints += pointsScored

        });
        let totalSgpa = totalGradePoints / totalCreditPoints
        let roundedValue = Math.round(totalSgpa * 100) / 100;
        setResult(roundedValue)
    }


    return (
        <>
            <Box sx={{
                width: '100%',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                mb: 3
            }}>
                {
                    Object.entries(SemToCredits[semName - 1].subjectToCredits).map(([subject, credits]) => (
                        <FormControl key={subject} sx={{ mt: 3, width: { xs: '90%', sm: '80%', md: '70%', lg: '60%', xl: '70%' } }} size='small'>
                            <InputLabel
                                sx={{
                                    color : theme.palette.text.primary,
                                    '&.Mui-focused': {
                                        color: theme.palette.text.primary,
                                    },
                                    fontWeight: '200',
                                    fontSize: '15px',
                                }}
                            >
                                {subject} (Credits: {credits})
                            </InputLabel>
                            <Select
                                value={formData[subject]?.grade || ''}
                                onChange={(e) => handleChange(e, subject, credits)}
                                autoWidth
                                label={subject}
                                MenuProps={MenuProps}
                                sx={{
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: theme.palette.inputBorder.primary,
                                    },
                                    height: '50px',
                                    
                                }}
                            >
                                {Object.entries(GradePoints).map(([grade]) => (
                                    <MenuItem key={grade} value={grade}>{grade}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ))
                }
                <Box sx={{
                    my: 3, width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Button variant="contained"
                        onClick={handleSubmit}
                        sx={{
                            color: theme.palette.buttonText.primary,
                            backgroundColor: theme.palette.buttonBG.primary,
                            borderRadius: "20px",
                            width: "150px",
                            '&:hover': {
                                backgroundColor: theme.palette.buttonBG.hover,
                            },

                        }}>Submit</Button>
                </Box>
                <p>Total SGPA : {result}</p>
            </Box>

        </>
    );
}


export default Subjects
