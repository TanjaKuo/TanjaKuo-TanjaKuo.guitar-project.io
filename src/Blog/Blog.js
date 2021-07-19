import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { postData } from "../postData";

const useStyles = makeStyles({
  root: {
    maxWidth: 255,
    maxHeight: 450,
    marginRight: "2rem",
    marginBottom: "1rem",
    boxShadow:
      "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
  },
  media: {
    height: 140,
  },
});

const Blog = () => {
  const classes = useStyles();

  return (
    <>
      <div className="post-container">
        {postData.map((post) => {
          const { id, title, des, url, img } = post;
          return (
            <Card className={classes.root} key={id}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img.url}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {des}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Link to={url}>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
