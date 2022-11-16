import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import classes from "./styles.module.css"

export default function ActionAreaCardWeather(props) {
    let weatherCelcius = props.children[3]
    let color = " rgba(33, 116, 232, 0.996)";

    if (weatherCelcius >10) {
        color = " rgba(33, 116, 232, 0.996)"
    }
    else{
        color = "rgba(168, 194, 229, 0.996)";
    }

    return (
        <div className={classes.cardClass} style={{ "background-color": color,borderRadius:"50px" }} >
            <Card className={classes.cardClass} style={{ "background-color": color ,borderRadius:"50px"}}>
                <CardActionArea className={classes.cardClass}>
                    <CardContent className={classes.cardClass} style={{ "background-color": color,borderRadius:"50px" }}>
                        <div className="row">
                            <div className="col-md-5">
                                <img src={props.children[0]} style={{ height: "150px" }} />
                            </div>
                            <div className="col-md-7">
                                <div className={classes.Span}>
                                    <span>
                                        {props.children[2]}
                                    </span>
                                </div>
                                <div>
                                    <i className={classes.TagClass}> {props.children[1]} <b className={classes.celcius}>{props.children[3]}℃</b> </i>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
