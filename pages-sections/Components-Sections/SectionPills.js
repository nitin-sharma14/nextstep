import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Upcoming Fitness Goals</h3>
          </div>
          <div className={classes.title}>
            <h3>
              <small>(for April & May)</small>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Things to do",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                        1. Be in it for the long run<br />
2. Get onto a healthy nutrition plan<br />
3. Monitor your vital statistics and keep them in check<br />
4. Have a consistent approach<br />
5. Improve your flexibility and balance<br />
6. Improve our immune system<br />
7. Get out of your comfort zone<br />
8. Take a proper amount of time to achieve your goals<br />
9. Make your fitness goals specific, measurable, attainable and time-bound<br />
10. Focus more on establishing healthy habits than on results
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Daily Schedule",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                        Start with a morning ritual. <br />
Focus on three big tasks for the day — starting with your frog. <br />
Schedule calls and meetings in the afternoon. <br />
Follow the 52-17 rule. <br />
Create theme days. <br />
Avoid decisions. <br />
Batch tasks together. <br />
Relax in the evening.<br />
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Tasks",
                    tabIcon: List,
                    tabContent: (
                      <span>
                        <p>
                        1. The importance of “me” time<br />
2. Prepare the night before<br />
3. Consistency beats ability<br />
4. Develop your grand life vision<br />
5. Block distractions<br />
6. Read/listen/watch something uplifting<br />
7. Meditate/journal/stretch<br />
8. Step out of your exercise comfort zone<br />
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={6}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Importance",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                        Healthy habits help prevent certain health conditions, such as heart disease, stroke, and high blood pressure. If we take care of ourselves, we can keep our cholesterol and blood pressure within a safe range. This keeps our blood flowing smoothly, decreasing our risk of cardiovascular diseases.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Best Time",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                        Dawn, dusk or dead of night— when’s the best time to work out? Well, that depends on when’s the best time for us, because the benefits of physical activity depend upon how consistent we are.

We might have heard that the best time to exercise is early in the morning — to get your metabolism going or to avoid unexpected distractions during the day that could derail our workout. But if we’re not a morning person, it may not work for us to try to get up at dawn to work out. The key is to do what’s most likely to work for us consistently.
                        </p>
                      </span>
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
