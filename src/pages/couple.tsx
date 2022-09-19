import React from "react";
import { Grid } from "@mui/material";
import image5 from "../images/image5.jpg";
import image4 from "../images/image4.jpg";

export const Couple = () => {
  return (
    <div className="Home">
      <header className="App-header">
        <Grid>
          <img style={{ width: "100%" }} src={image5} />
        </Grid>
        <Grid>
          <img style={{ width: "100%" }} src={image4} />
        </Grid>
      </header>
    </div>
  );
};
