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

import postData from "../postData";

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

export default function Post() {
  const classes = useStyles();

  return (
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
                <Typography variant="body2" color="textSecondary" component="p">
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

      {/* <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={blog2}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Fender USA '52 Telecaster Reissue (1992)
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Whilst the subject of this retrospective was made twenty years
              ago, it replicates an instrument built in the dim and distant
              post-war decade, a full sixty years ago.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Link to="/blog/fender-usa52">
            <Button size="small" color="primary">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={blog3}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Gibson Les Paul Pro Deluxe 1976 to 1982
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              By the mid ‘eighties I’d seen and heard a heck of a lot of Les
              Pauls – mostly on the local live music scene, and probably as many
              copies as genuine Gibsons.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={blog4}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Yamaha SG 2000 - Japan's First Megastar Guitar
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              That's how seasoned guitar reviewer David Lawrenson summed up the
              Yamaha SG 2000 in its early 1980s heyday.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card> */}
    </div>
  );
}
