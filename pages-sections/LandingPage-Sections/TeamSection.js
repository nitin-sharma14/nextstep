import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/work1.jpg";
import team2 from "assets/img/faces/work2.jpg";
import team3 from "assets/img/faces/work3.png";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Working Experience</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Soluzione IT Services Pvt. Ltd
                <br />
                <small className={classes.smallTitle}>Web Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Customer’s websites customization for Page Rank Improvements over tools such as Alexa, SEO+SMO operations, renovations using WooCommerce & WordPress tools for better user experience. Worked on live clients domains, setting up the domain, hosts, websites & tools from scratch.
                </p>
              </CardBody>
              
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              RS Technologies Pvt. Ltd.
                <br />
                <small className={classes.smallTitle}>Software Engineer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Developed local web services like Search Engine Optimization Ranking tool & Application Program Interfaces. Socket programming for calculating network throughput, packet loss and network emulator tools. Configured network hubs, switches, cables, routers & firewall from scratch for setting up local LANs.
                </p>
              </CardBody>
              
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Magnet Brains Soft. Tech. Pvt. Ltd
                <br />
                <small className={classes.smallTitle}>Web Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Developing website themes and plugins from scratch using PHP, HTML, CSS, JavaScript. Live Technical Customer support and after sales services to clients over voice/mails/skype. Software testing, implementation, bug determining & fixation activities. Live projects InkThemes and FormGet.
                </p>
              </CardBody>
              
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
