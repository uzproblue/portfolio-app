import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./css/MediaCard.css";

const useStyles = makeStyles({
  root: {
    width: 270,
    margin: "0px",
    height: "330px",
  },
  media: {
    height: "170px",
    backgroundPosition: "center",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.image}
                title="Project_image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.info}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="card_button_wrapper">
              <Button
                size="small"
                color="primary"
                variant="contained"
                target="_blank"
                href={props.url}
              >
                Visit
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className="flip-card-back">
          <div className="flip-card-back_inside">
            <h3>Toolset</h3>
            <ul>
              {props.back.map((i, index) => (
                <li key={index}>👉 {i}</li>
              ))}
            </ul>
            <CardActions className="card_button_wrapper">
              <Button
                size="small"
                color="primary"
                variant="contained"
                target="_blank"
                href={props.url}
              >
                Visit
              </Button>
            </CardActions>
          </div>
        </div>
      </div>
    </div>
  );
}
