import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    // maxHeight: '450px',
    // overflow:'hidden'
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
  const maxSteps = tutorialSteps.length;

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

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <div style={{maxHeight:'450px',overflow:'hidden'}}>
        <img
          className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}
        />
      </div>
      <MobileStepper
        variant="dots"
        steps={5}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Siguiente
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Anterior
        </Button>
        }
      />
    </div>
  );
}