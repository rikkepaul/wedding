import {
    Paper,
    Grid,
    Typography,
    TextField,
    Stack,
    FormControlLabel,
    Checkbox,
    Button
} from '@mui/material';
import { useState } from 'react';

export const Rsvp = () => {
    const handleSubmit = (e: any) => {
        console.log('Submit: ', formData);

        e.preventDefault();
        validateInput();
    };
    const [formData, setFormData] = useState({
        firstName: {
            value: '',
            error: ''
        },
        lastName: {
            value: '',
            error: ''
        },
        plusOne: {
            value: false
        },
        allergies: {
            value: ''
        }
    });

    const validateInput = () => {
        if (!formData.firstName.value) {
            Object.assign(formData.firstName, {
                error: 'Required'
            });
        }
        if (!formData.lastName.value) {
            Object.assign(formData.lastName, {
                error: 'Required'
            });
        }
        setFormData({
            ...formData
        });
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        if (name === 'plusOne') {
            setFormData({
                ...formData,
                [e.target.name]: {
                    value: e.target.checked
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: {
                    value,
                    error: ''
                }
            });
        }
    };

    return (
        <Paper
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: '50px'
            }}
            style={{
                backgroundImage: 'url(/images/image4.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Grid
                container
                direction="column"
                sx={{
                    height: '300px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    borderRadius: '10px'
                }}
            >
                <Typography variant="h2">
                    La oss få vite om du kommer eller ikke
                </Typography>
                <form>
                    <Stack spacing={1}>
                        <Stack direction={'row'}>
                            <TextField
                                name={'firstName'}
                                value={formData.firstName.value}
                                error={!!formData.firstName.error}
                                required
                                style={{ width: '200px', margin: '5px' }}
                                type="text"
                                label="Fornavn"
                                variant="outlined"
                                onChange={handleInputChange}
                            />
                            <TextField
                                name={'lastName'}
                                value={formData.lastName.value}
                                error={!!formData.lastName.error}
                                required
                                style={{ width: '200px', margin: '5px' }}
                                type="text"
                                label="Etternavn"
                                variant="outlined"
                                onChange={handleInputChange}
                            />
                        </Stack>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    required
                                    name={'plusOne'}
                                    checked={formData.plusOne.value}
                                    onChange={handleInputChange}
                                />
                            }
                            label="Kryss av om du har med følge"
                            labelPlacement="end"
                        />
                        <TextField
                            name={'allergies'}
                            value={formData.allergies.value}
                            style={{ width: '200px', margin: '5px' }}
                            type="text"
                            label="Allergener/Melding"
                            variant="outlined"
                            onChange={handleInputChange}
                        />
                        <Button variant="contained" onClick={handleSubmit}>
                            Send
                        </Button>
                    </Stack>
                </form>
            </Grid>
        </Paper>
    );
};

export default Rsvp;
