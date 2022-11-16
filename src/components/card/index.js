import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import classes from "./styles.module.css"


export default function ActionAreaCard({ city="Kodluyoruz",plateNumber = "Kodluyoruz", body = "" }) {
    const cityImages = require(`../../static/image/cities/${plateNumber}.png`)
    return (
        <div className={classes.CardMargin}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        image={cityImages}
                        alt={city}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}