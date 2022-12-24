import { Grid } from '@mui/material';

export const Couple = () => {
    return (
        <div className="Home">
            <header className="App-header">
                <Grid>
                    <img style={{ width: '100%' }} src={'/images/image5.jpg'} />
                </Grid>
                <Grid>
                    <img style={{ width: '100%' }} src={'/images/image4.jpg'} />
                </Grid>
            </header>
        </div>
    );
};

export default Couple;
