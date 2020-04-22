import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import image from "assets/img/serv.png";
const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>My love and Goals at NextStep</h2>
          <h5 className={classes.description}>
            Framing my skills & expertise in some broad sections and the area to which I can contribute are described as follows.
          
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Web/App Development"
              description="A website is reposible for that masterstroke first impression to their customers, more like love at first sight. With my core expertise in web development and it's services, at NextStep I will be able to contribute in beautifying the existing website and applications. The goals under refinement of website would include working in core UI/UX so as to enhance the user experience such that the website could be more engaging and full of self-guiding functionalities."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="SEO/SEM/SMO"
              description="There is no point in having the best website and but no visibility to customers. Having worked in Search Engine Optimizations, I understand how important it is to fetch the top ranks on search engines and social media. Also the fast loading of webpages and bringing more traffic to the website/app are the key for growth of any firm in this rapidly evolving world. This include code efficiency, multi-device reponsiveness, better security which ultimately leads to more reputation and business building."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Server/Database Administrator"
              description="With big chunks of data flowing every second to-and-fro the network and undeerlying database requires the system to server to successfully store, organize and access data. With my handful experience in computer programming, software engineering and data architecture and management, I hope at NextStep a good role can be played from my side in keeping a healthy system architecture and feasible flow of data sharing several core duties in any setting."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>

        <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Working in Conjunction with the services</h2>
          <h5 className={classes.description}>
          <img src={image} width="100%"/>
          </h5>
        </GridItem>
      </GridContainer>

      </div>
    </div>
  );
}
