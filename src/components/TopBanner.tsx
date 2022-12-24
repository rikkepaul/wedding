import Toolbar from '@mui/material/Toolbar';
import {
    Paper,
    Grid,
    IconButton,
    styled,
    Typography,
    useMediaQuery,
    MenuItem
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useTheme } from '@mui/material/styles';
import React from 'react';

export const TopBanner = () => {
    return (
        <>
            <StyledPaperContainer>
                <StyledHeader>Bryllup</StyledHeader>
                <StyledDescription>13. Februar 2024</StyledDescription>
            </StyledPaperContainer>
            <StickyTopNav>
                <Toolbar>
                    <IconButton href={'/'}>
                        <FavoriteBorderIcon />
                    </IconButton>
                    <Grid container justifyContent={'end'}>
                        <MenuItem component={'a'} href="/couple">
                            Paret
                        </MenuItem>
                        <MenuItem component={'a'} href={'/wedding'}>
                            Festen
                        </MenuItem>
                        <MenuItem component={'a'} href={'/rsvp'}>
                            RSVP
                        </MenuItem>
                    </Grid>
                </Toolbar>
            </StickyTopNav>
        </>
    );
};

const StickyTopNav = styled(Grid)`
    position: sticky;
    top: 0;
    background: white;
`;
const StyledHeader = styled(Typography)`
    color: white;
    font-size: 100px;
    font-family: Apple Chancery;
`;
const StyledDescription = styled(Typography)`
    color: white;
    font-size: 50px;
    font-family: Apple Chancery;
`;

const StyledPaperContainer = styled(Paper)`
    background-image: url('/images/image1.jpg');
    background-size: cover;
    background-position: center;
    height: 300px;
`;
