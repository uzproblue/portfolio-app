import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./css/ToolProgress.css";
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CustomizedProgressBars(props) {
  const classes = useStyles();

  return (
    <div className={"bar " + classes.root}>
      <div className="bar__info">
        <img src={props.src} alt="toolImage" />
        <h2>{props.name}</h2>
      </div>

      <BorderLinearProgress variant="determinate" value={props.value} />
    </div>
  );
}
