import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SE9UJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D";

    const COLD_URL = "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";

    const RAIN_URL = "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW5pbmd8ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 140 }}image={info.humidity>80 ? RAIN_URL :info.temp>15 ? HOT_URL: COLD_URL }title="Weather" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} 
                            <br></br>
                            {info.humidity>80 ? <ThunderstormIcon/> :info.temp>15 ? <SunnyIcon/> : <AcUnitIcon/> }
                        </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <p>Temperature = {info.temp}&deg;C</p>
                                <p>Min temp = {info.tempMin}&deg;C</p>
                                <p>Max temp = {info.tempMax}&deg;C</p>
                                <p>Humidity = {info.humidity}%</p>
                                <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}