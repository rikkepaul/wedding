import Toolbar from "@mui/material/Toolbar";
import { Paper, Button, Grid, IconButton, styled, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import {useTranslation} from "react-i18next";

export const TopBanner = () => {
  
  const {t, i18n} = useTranslation('common');
  const [isEnglish, setEnglish] = useState(false)
  const handleLanguageChange = () => {
    if (isEnglish) {
      i18n.changeLanguage('no');
      setEnglish(false);
    } else{
      i18n.changeLanguage('en');
      setEnglish(true);
    }
  };
  return (
    <>
      <StyledPaperContainer>
        <StyledHeader>{t("header.title")}</StyledHeader>
        <StyledDescription>{t("header.date")}</StyledDescription>
      </StyledPaperContainer>
      <StickyTopNav>
        <Toolbar>
          <IconButton href={"/"}>
            <FavoriteBorderIcon />
          </IconButton>
          <Grid container justifyContent={"end"}>
            <Button href={"/"}>{t("navBar.home")}</Button>
            <Button href={"/couple"}>{t("navBar.couple")}</Button>
            <Button href={"/wedding"}>{t("navBar.wedding")}</Button>
            <Button href={"/wedding"}>{t("navBar.rsvp")}</Button>
            <Button onClick={handleLanguageChange}>{isEnglish ? t("navBar.norwegian") : t("navBar.english")}</Button>

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
  background-image: url("/images/image1.jpg");
  background-size: cover;
  background-position: center;
  height: 300px;
`;
