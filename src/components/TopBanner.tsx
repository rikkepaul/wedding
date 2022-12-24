import Toolbar from '@mui/material/Toolbar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    Paper,
    Button,
    Grid,
    IconButton,
    styled,
    Typography,
    useMediaQuery,
    Menu,
    MenuItem,
    Link
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useTheme } from '@mui/material/styles';
import React from 'react';

export const TopBanner = () => {
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
                    {isSmallDevice ? (
                        <Grid container justifyContent={'end'}>
                            <Button
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                Meny
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button'
                                }}
                            >
                                <MenuItem component={'a'} href="/">
                                    Hjem
                                </MenuItem>
                                <MenuItem component={'a'} href="/couple">
                                    Paret
                                </MenuItem>
                                <MenuItem component={'a'} href={'/wedding'}>
                                    Festen
                                </MenuItem>
                                <MenuItem component={'a'} href={'/rsvp'}>
                                    RSVP
                                </MenuItem>
                            </Menu>
                        </Grid>
                    ) : (
                        <Grid container justifyContent={'end'}>
                            <MenuItem component={'a'} href="/">
                                Hjem
                            </MenuItem>
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
                    )}
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
