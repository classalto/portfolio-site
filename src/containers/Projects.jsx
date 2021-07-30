import React from 'react';
import Header from '../components/Header';
import { projects } from '../data/projects.js';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../containers/home.module.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 400,
    height: 400,
    backgroundColor: 'whitesmoke',
    margin: '25px',
    boxShadow: '10px 10px 10px 10px grey',
  },
  container: {
    width: '100%',
    height: '70%',
    marginTop: '150px',
    display: 'grid',
    zIndex: '1',
    gridTemplateColumns: '450px 450px 450px',
    gridTemplateRows: '450px 450px 450px',
    justifyContent: 'space-evenly',
  },
  content: {
    height: '10vh',
    fontFamily: 'Comfortaa',
  },
  links: {
    height: '5vh',
  },
  list: {
    fontFamily: 'Comfortaa',
    fontWeight: 'bolder',
    padding: '10px 0px 10px 0px',
  },
});

const Projects = () => {
  const classes = useStyles();
  return (
    <>
      <figure className={styles.box}>
        <div className={styles.wave}></div>
      </figure>
      <Header />
      <div className={classes.container}>
        {projects.map((project) => (
          <Card className={classes.root} key={project.name}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={project.name}
                height="140"
                image="https://placekitten.com/300/300"
                title="project"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  className={classes.content.heading}
                >
                  <span>{project.name}</span>
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.list}
                >
                  {project.tech}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.content}
                >
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.links}>
              <Button size="small" color="primary">
                <a href={project.repository}>Source</a>
              </Button>
              <Button size="small" color="primary">
                <a href={project.url}>Deployment</a>
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Projects;
