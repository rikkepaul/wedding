import React from "react";
import { Grid } from "@mui/material";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";

export const Wedding = () => {
  return (
    <div className="Home">
      <header className="App-header">
        <Grid>
          <img style={{ width: "100%" }} src={image3} />
        </Grid>
        <Grid>
          <img style={{ width: "100%" }} src={image4} />
        </Grid>
      </header>
    </div>
  );
};
