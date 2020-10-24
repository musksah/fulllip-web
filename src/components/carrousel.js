import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';
import Enviroment from '../enviroment';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';

const URL = `${Enviroment.urlApi}/img-carrousell`;

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      '/img/slider1.jpg',
  },
  {
    label: 'Bird',
    imgPath:
      '/img/slider2.png',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      '/img/slider3.png',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      '/img/slider4.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      '/img/slider5.png',
  },
];

var items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
    url: "img/index/banner/banner_web_1.jpg",
    subtitle: "img/index/banner/banner_mobile_1.jpg"
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    url: "img/index/banner/banner_web_2.jpg",
    subtitle: "img/index/banner/banner_mobile_2.jpg"
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    url: "img/index/banner/banner_web_3.jpg",
    subtitle: "img/index/banner/banner_mobile_3.jpg"
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    marginTop: '3.5em',
  },
  rootBefore: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    maxWidth: '100%',
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
  card_media: {
    [theme.breakpoints.only('xs')]: {
      height: '450px',
      width: '100%'
    },
    [theme.breakpoints.only('sm')]: {
      height: '600px',
      width: '100%'
    },
    [theme.breakpoints.only('md')]: {
      height: '650px',
      width: '100%'
    },
    [theme.breakpoints.only('lg')]: {
      height: '720px',
      width: '100%'
    },
    [theme.breakpoints.up('xl')]: {
      height: '850px',
      width: '100%'
    },
  }
}));

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [itemsCarrousell, setItemsCarrousell] = React.useState(items);
  const maxSteps = tutorialSteps.length;



  React.useEffect(() => {
    getImageCarrousel();
  }, []);

  const getImageCarrousel = () => {
    console.log("Trayendo imágenes carrousell");
    axios.get(`${URL}`).then(
      res => {
        console.log(res);
        setItemsCarrousell(res.data);
      },
      err => {
        console.log(err);
      }
    )
  }

  const handleNext = () => {
    console.log(maxSteps);
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setActiveStep(function (prevActiveStep) {
      if ((maxSteps) == (prevActiveStep + 1)) {
        return 0;
      }
      return prevActiveStep + 1;
    });
  };

  function Item(props) {
    return (
      <Box>
        {/* Se muestra en xs */}
        <Hidden only={['sm', 'md', 'lg', 'xl']}>
          <Card className={[classes.root].join(' ')}>
            <CardActionArea>
              <Box>
                <CardMedia
                  className={[classes.card_media, ''].join(' ')}
                  image={props.item.subtitle}
                  title="Imagen de Carrousel"
                />
              </Box>
            </CardActionArea>
          </Card>
        </Hidden>
        {/* Se muestra en sm */}
        <Hidden only={['xs','lg','xl']}>
          <Card className={[classes.root].join(' ')}>
            <CardActionArea>
              <Box>
                <CardMedia
                  className={[classes.card_media, ''].join(' ')}
                  image={"img/index/banner/banner_ipad_3.png"}
                  title="Imagen de Carrousel"
                />
              </Box>
            </CardActionArea>
          </Card>
        </Hidden>
        {/* Se muestra en md, lg, xl */}
        <Hidden only={['xs','sm','md']}>
          <Card className={[classes.root].join(' ')}>
            <CardActionArea>
              <Box>
                <CardMedia
                  className={[classes.card_media, ''].join(' ')}
                  image={props.item.url}
                  title="Imagen de Carrousel"
                />
              </Box>
            </CardActionArea>
          </Card>
        </Hidden>
      </Box>
    )
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box className={classes.root}>
      <Carousel navButtonsAlwaysVisible="true">
        {
          itemsCarrousell.map((item, i) => <Item key={i} item={item} />)
        }
      </Carousel>
    </Box>
  );
  // return (
  //   <div className={classes.root}>
  //     <div style={{maxHeight:'450px',overflow:'hidden'}}>
  //       <img
  //         className={classes.img}
  //         src={tutorialSteps[activeStep].imgPath}
  //         alt={tutorialSteps[activeStep].label}
  //       />
  //     </div>
  //     <MobileStepper
  //       variant="dots"
  //       steps={5}
  //       position="static"
  //       activeStep={activeStep}
  //       className={classes.root}
  //       nextButton={
  //         <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
  //           Siguiente
  //         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
  //         </Button>
  //       }
  //       backButton={
  //         <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
  //           {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
  //         Anterior
  //       </Button>
  //       }
  //     />
  //   </div>
  // );
}