import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';
import Enviroment from '../enviroment';

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
    url: "img/BANNER-CANDY.jpg"
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    url: "img/BANNER-FRUTAS.jpg"
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    url: "img/BANNER-GLOSSY.jpg"
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    marginTop: '6em',
    // overflow:'hidden'
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
      // <Paper>
      <Box>
        <img src={props.item.url} style={{ height: '550px', width: '100%' }}></img>
      </Box>
      // </Paper>
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