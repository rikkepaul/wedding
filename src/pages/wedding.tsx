import { Grid } from '@mui/material';

const Wedding = () => {
    return (
        <div className="Home">
            <header className="App-header">
                <Grid>
                    <img style={{ width: '100%' }} src={'/images/image2.jpg'} />
                </Grid>
                <Grid>
                    <img style={{ width: '100%' }} src={'/images/image3.jpg'} />
                </Grid>
            </header>
        </div>
    );
};

export default Wedding;
