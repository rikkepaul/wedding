import { Grid, Typography } from "@mui/material";

export interface InformationCardProps {
    title: string;
    description: string;
    text: string;
    route: string;
}

const InformationCard = ({title, description, text, route}:InformationCardProps) => {
    return(
        <Grid item xs={12} lg={6}>
            <Grid container direction="column" component="a" href={route} sx={{ color: "black", textDecoration: "none", height: "300px", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255,255,255,0.75)", borderRadius: "10px"}}>
                <Typography variant="h2">{title}</Typography>
                <Typography variant="body1">{description}</Typography>
                <Typography variant="body2">{text}</Typography>
            </Grid>
        </Grid>
    );

};
export default InformationCard;