import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Fun Fact About Me</h2>
            <h4>
              Every month I try something new which I have never done in my life. In January I tried beard & moustache on me, February gave me new experience with hands on Snooker, In march I got my new roomie (A pet fish), April was sad but still I learned cooking Egg-Rice and many Indian meals.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
