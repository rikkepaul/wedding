import { Paper, Grid, Typography } from '@mui/material';
import InformationCard, {
    InformationCardProps
} from '../components/InformationCard';

export const Home = () => {
    const cardInformation: InformationCardProps[] = [
        {
            title: 'Paret',
            description: 'todo',
            text: 'heihei',
            route: '/couple'
        },
        {
            title: 'Party',
            description: 'Location',
            text: 'time and place to be',
            route: '/wedding'
        },
        {
            title: 'RSVP',
            description: 'La oss vite om du kommer',
            text: 'hello? anybody?',
            route: '/rsvp'
        },
        {
            title: 'Home',
            description: 'forntpage',
            text: 'yess',
            route: '/'
        }
    ];
    return (
        <Paper
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: '50px'
            }}
            style={{
                backgroundImage: 'url(/images/image3.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Grid container spacing={6} justifyContent="space-between">
                {cardInformation.map((item) => (
                    <InformationCard
                        title={item.title}
                        description={item.description}
                        text={item.text}
                        route={item.route}
                    />
                ))}
            </Grid>
        </Paper>
    );
};

export default Home;
