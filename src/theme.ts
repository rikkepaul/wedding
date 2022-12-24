import { createTheme } from '@mui/material/styles';

export const globalTheme = createTheme({
    typography: {
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        h2: {
            fontSize: '28px',
            lineHeight: '2rem',
            fontWeight: 700
        }
    }
});
