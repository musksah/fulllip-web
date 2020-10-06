import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from './cardscallaction';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Enviroment from '../enviroment';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, NavLink, useHistory } from "react-router-dom";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './gridcardaction.css';


const images = [
  {
    url: '/img/fullip1.jpg',
    title: 'Kit',
    width: '25%',
  },
  {
    url: '/img/slider1.jpg',
    title: 'Redondo Grande',
    width: '25%',
  },
  {
    url: '/img/slider5.png',
    title: 'Mediano Óvalo',
    width: '25%',
  },
  {
    url: '/img/slider2.png',
    title: 'Pequeño Óvalo',
    width: '25%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: '300px',
  },
  box_product: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn_product: {
    position: 'relative',
    border: 'solid 3px white',
    opacity: '0.7',
    backgroundColor: 'grey',
    borderRadius: '0',
    color: 'white'
  },
  hoverButton: {
    '&:hover': {
      display: "none",
    },
  }
}));

const URL = `${Enviroment.urlApi}/img-in-products`;

export default function NestedGrid() {
  const classes = useStyles();
  const [listImages, setlistImages] = useState([]);
  const history = useHistory();
  const [expanded, setExpanded] = React.useState(false);
  const [buttonStyle, setButtonStyle] = useState({ 'img': '' });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    // debugger
    axios.get(URL).then(
      res => {
        console.log(res);
        setlistImages(res.data);
      },
      err => {
        console.log(err);
      }
    )
  }

  function goProduct(id) {
    history.push("/product/" + id);
  }

  function hoverProductCard(key, image) {
    console.log(`Hover product ${key}`);
    // console.log(listImages);
    let newArr = [...listImages];
    newArr.forEach((value, index, currentArr) => {
      if (index == key) {
        currentArr[index].url = listImages[index].name;
      }
    });
    console.log(newArr);
    // debugger
    setlistImages(newArr);
  }

  function leaveProductCard(key, image) {
    console.log(`Leaving product ${key}`);
    // console.log(listImages);
    let newArr = [...listImages];
    newArr.forEach((value, index, currentArr) => {
      if (index == key) {
        currentArr[index].url = listImages[index].subtitle;
      }
    });
    // console.log(newArr);
    setlistImages(newArr);
  }

  function FormRow() {
    return (
      <React.Fragment>
        <Grid container justify="center" spacing={2} style={{ marginTop: '1em' }}>
          {listImages.map((image, index) => (
            <Grid item xs={12} sm={3} md={3} lg={3} key={image.id_image_index_product} onMouseEnter={() => hoverProductCard(index, image.name)} onMouseLeave={() => leaveProductCard(index, image.name)} className={[].join(' ')}  >
              {/* onMouseEnter={() => hoverProductCard(index, image.name)} onMouseLeave={() => leaveProductCard(index, image.name)}  */}
              <Card className={[classes.root].join(' ')}>
                <CardActionArea>
                  <Box className={classes.box_product}>
                    <Button className={classes.btn_product} onClick={() => goProduct(image.id_image_index_product)} >{image.title}</Button>
                  </Box>
                  <Box>
                    <CardMedia
                      className={[classes.media].join(' ')}
                      image={image.url}
                      title="Contemplative Reptile"
                    />
                  </Box>
                  {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {image.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {image.subtitle}
                    </Typography>
                  </CardContent> */}
                </CardActionArea>
                {/* <CardActions>
                  <Button size="small" color="primary">
                    Share
                 </Button>
                  <Button size="small" color="primary">
                    Learn More
                 </Button>
                </CardActions> */}
              </Card>
            </Grid>
            // <ButtonBase
            //   focusRipple
            //   className={classes.image}
            //   focusVisibleClassName={classes.focusVisible}
            //   style={{
            //     width: '23%',
            //     marginLeft:'1em'
            //   }}
            //   key={image.id_image_index_product}
            //   onClick={() => goProduct(image.id_image_index_product)}
            // >
            //   <span
            //     className={classes.imageSrc}
            //     style={{
            //       backgroundImage: `url(${image.url})`,
            //     }}
            //   />
            //   <span className={classes.imageBackdrop} />
            //   <span className={classes.imageButton}>
            //     <Typography
            //       component="span"
            //       variant="subtitle1"
            //       color="inherit"
            //       className={classes.imageTitle}
            //     >
            //       {image.title}
            //       <span className={classes.imageMarked} />
            //     </Typography>
            //   </span>
            // </ButtonBase>
          ))}

        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root} style={{ marginTop: '1rem' }}>
      <FormRow />
    </div>
  );
}