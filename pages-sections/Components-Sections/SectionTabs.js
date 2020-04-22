import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>My Bucket List</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>SkyDiving in Dubai</small>
              </h3>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Info",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Last year I came to know about the SkyDiving activity that is conducted in Dubai, The Palm Dropzone offers visitors truly unique experiences. A tandem skydive from 13,000 feet above the Palm Jumeirah is an incredible experience that I wanna have atleast once in my life.
                      </p>
                    )
                  },
                  {
                    tabName: "How it started?",
                    tabIcon: Chat,
                    tabContent: (
                      <p className={classes.textCenter}>
                        On October 22, 1797, André-Jacques Garnerin donned his crudely fashioned silk parachute and jumped from a hydrogen balloon flying 3,200 feet above Paris, placing his name in history as the first person to descend from high altitude using air resistance.
                      </p>
                    )
                  },
                  {
                    tabName: "Rules & Settings",
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>
                        You must be at least 18 years old. Need to carry your valid photo id proofs Emirates ID, driver’s license, ID card with photo, passport.
Weight and BMI (Body Mass Index) with clothing and sport shoes must not exceed the maximum safety requirements.
The BMI and weight requirements are as follows:
Women - 90 kgs (198 lbs) or less. Maximum BMI 27.5.
Men - 100 kgs (220.5 lbs) or less. Maximum BMI 30.
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Must visit places before dying</small>
              </h3>
              <CustomTabs
                plainTabs
                headerColor="danger"
                tabs={[
                  {
                    tabName: "Tomorrowland",
                    tabContent: (
                      <p className={classes.textCenter}>
                        Tomorrowland is an EDM and electronic music festival held in Boom, Belgium. Tomorrowland is the world's biggest dance music festival, bringing an A-list lineup of DJs from across the dance music spectrum to Boom in Belgium each summer. 

Throw in its incredible stage design, production, and quirky surprises, and it's easy to see why Tomorrowland tickets sell out in record time each year. 
                      </p>
                    )
                  },
                  {
                    tabName: "Jellyfish Lake Swimming",
                    tabContent: (
                      <p className={classes.textCenter}>
                       Jellyfish Lake in the Micronesian country of Palau is home to millions of jellyfish that are deemed relatively harmless since their sting is so light. It was still frightening for the first five minutes to be surrounded by jellyfish, some brushing up against my body. But, after the panic dissipated, this was one of my all-time favorite bucket list travel adventures.
                      </p>
                    )
                  },
                  {
                    tabName: "Wild Mushroom Hunting",
                    tabContent: (
                      <p className={classes.textCenter}>
                       Though truffle hunting is a popular foodie experience around the world, in Northern California wild mushroom hunting of all kinds in a crowd-pleaser. During Napa‘s famous truffle festival they offer a mushroom foraging excursion where three mycologists, fungi gurus, lead the pack. You can walk away with a once-in-a-lifetime experience under your belt and a basketful of bounty.
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
