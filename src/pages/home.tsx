import React from "react";
import { Grid } from "@mui/material";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

export const Home = () => {
  return (
    <div className="Home">
      <header className="App-header">
        <Grid>
          <img style={{ width: "100%" }} src={image2} />
        </Grid>
        <Grid>
          <img style={{ width: "100%" }} src={image3} />
        </Grid>
      </header>
    </div>
  );
};
