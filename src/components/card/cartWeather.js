import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import classes from "./styles.module.css"

export default function ActionAreaCardWeather(props) {
    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>

                <CardMedia style={{ objectFit: "contain", backgroundColor: "rgb(197, 224, 228)" }}
                    component="img"
                    height="100"
                    image={props.children[0]} />
                <CardContent>
                    <div className={classes.TagClass}>
                        <i>   {props.children[1]}</i>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
