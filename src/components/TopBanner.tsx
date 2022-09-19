import Toolbar from "@mui/material/Toolbar";
import { Button, Grid, IconButton, styled, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import image1 from "./../images/image1.jpg";

export const TopBanner = () => {
  return (
    <>
      <StyledPaperContainer>
        <StyledHeader>Welcome</StyledHeader>
        <StyledDescription>13. February 2024</StyledDescription>
      </StyledPaperContainer>
      <StickyTopNav>
        <Toolbar>
          <IconButton href={"/"}>
            <FavoriteBorderIcon />
          </IconButton>
          <Grid container justifyContent={"end"}>
            <Button href={"/"}>Home</Button>
            <Button href={"/couple"}>The Couple</Button>
            <Button href={"/wedding"}>The Wedding</Button>
            <Button>RSVP</Button>
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

const StyledPaperContainer = styled(Grid)`
  background-image: url(${image1});
  background-size: cover;
  background-position: center;
  height: 300px;
`;
