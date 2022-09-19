import { Paper,Grid, Typography } from "@mui/material";
import InformationCard, { InformationCardProps } from "../components/InformationCard";

export const Wedding = () => {
  const cardInformation : InformationCardProps[] = [
    {
      title: "Reception",
      description: "Description",
      text: "heihei",
      route: "/couple" 
    },
    {
      title: "Party",
      description: "Location",
      text: "time and place to be",
      route: "/wedding" 
    }

  ];
  return (
    <div>
        <Paper sx={{justifyContent: "center", alignItems: "center", padding: "50px"}} style={{backgroundImage: "url(/images/image3.jpg)", backgroundSize: "cover",  backgroundPosition: "center"}}>
          <Grid container spacing={6} justifyContent="space-between">
            {cardInformation.map(item => (
             <InformationCard title={item.title} description={item.description} text={item.text} route={item.route} />
             ))}
          </Grid>
        </Paper>
        <Paper sx={{justifyContent: "center", alignItems: "center", padding: "50px"}} style={{backgroundImage: "url(/images/image4.jpg)", backgroundSize: "cover",  backgroundPosition: "center"}}>
          <Grid container spacing={6} justifyContent="space-between">
              <Grid item xs={12} lg={6}>
              <Grid container direction="column" sx={{height: "300px", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255,255,255,0.75)", borderRadius: "10px"}}>
                <Typography variant="h2">The Couple</Typography>
                <Typography variant="body1">Bride</Typography>
                <Typography variant="body2">Groom</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Grid container direction="column" sx={{height: "300px", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255,255,255,0.75)", borderRadius: "10px"}}>
                  <Typography variant="h2">The Wedding</Typography>
                  <Typography variant="body1">Bridemaids</Typography>
                  <Typography variant="body2">Time</Typography>
                </Grid>
              </Grid>
            </Grid>
        </Paper>
    </div>
  );
};
