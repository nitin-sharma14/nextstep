import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [40],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    return function cleanup() {};
  });
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Reveiling the unknown side of me which isn't available on Resume.</h2>
        </div>
        <div id="buttons">
          <div className={classes.title}>
            <h3>
              Courses studied at University of New Hampshire :-
              <br />
              <small>(In First & Second semester)</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              
              <Button color="primary" round>
                Computer Networks
              </Button>
              <Button color="primary" round>
                Database Systems
              </Button>
              <Button color="primary" round>
              Machine Learning
              </Button>
              <Button color="primary" round>
              Advanced Computer Networks
              </Button>
              <Button color="primary" round>
              Computer Security
              </Button>
            </GridItem>
          </GridContainer>

          <div className={classes.title}>
            <h3>
              Ongoing Project :-
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
            <br /><h3>
              <small>The complete experiment is based on calculating the difference betwen the Real Time System and the System Clock. Multiuser UNIX-like operating systems such as Linux are often considered unsuitable for real-time data collection because of the potential for indeterminate timing latencies resulting from preemptive scheduling. In the project, Linux is shown to be fully adequate for precisely controlled programming with millisecond resolution or better. The Linux system calls that subserve such timing control are described and tested and then utilized in a MIDI-based program for tapping and music performance experiments. The timing of this program, including data input and output, is shown to be accurate at the millisecond level. This demonstrates that Linux, with proper programming, is suitable for real-time experiment software. In addition, the detailed description and test of both the operating system facilities and the application program itself may serve as a model for publicly documenting programming methods and software performance on other operating systems.</small></h3>
            </GridItem>
          </GridContainer>



          <div className={classes.title}>
            <h3>
              <small>Additional Conversation Languages that I want to learn :-</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Button color="primary" size="sm">
                Spanish
              </Button>
              <Button color="primary">French</Button>
              <Button color="primary" size="lg">
                German
              </Button>
            </GridItem>
          </GridContainer>
          <div className={classes.title}>
            <h3>
              <small>Hobbies</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Button>Default</Button>
              <Button color="primary">Travelling</Button>
              <Button color="info">Basketball</Button>
              <Button color="success">Soccer</Button>
              <Button color="warning">Meeting New People</Button>
              <Button color="danger">Cooking</Button>
              <Button color="rose">Brewing Tea</Button>
              <Button color="rose">Photography</Button>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space50} />
        
        <div className={classes.space70} />
        
        <div className={classes.space70} />
        
        <div id="sliders">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Now moving towards some of the informal things...!</h3>
              </div>
              <div id="sliderRegular" className="slider-primary" />
              <br />
              <div id="sliderDouble" className="slider-info" />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                
              </div>
              
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
