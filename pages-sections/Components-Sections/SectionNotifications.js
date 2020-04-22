import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/notificationsStyles.js";

const useStyles = makeStyles(styles);

export default function SectionNotifications() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="notifications">
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>Four Things That Can Keep COVID-19 Away</h3>
        </div>
      </div>
      <SnackbarContent
        message={
          <span>
            <b>STAY UPDATED AND INFORMED</b>
          </span>
        }
        close
        color="info"
        icon="info_outline"
      />
      <SnackbarContent
        message={
          <span>
            <b>ALWAYS ACT ON CORRECT SOURCE OF INFORMATIONS AND FOLLOW ALL PRECAUTIONS</b>
          </span>
        }
        close
        color="success"
        icon={Check}
      />
      <SnackbarContent
        message={
          <span>
            <b>TAKE ANY WARNING SERIOUSLY : DON'T FOLLOW A SOFTWARE GUY AT THIS COZ THEY DON'T TAKE</b>
          </span>
        }
        close
        color="warning"
        icon={Warning}
      />
      <SnackbarContent
        message={
          <span>
            <b>IN CASE OF ANY DANGER, APPROACH THE NEAREST HELP</b>
          </span>
        }
        close
        color="danger"
        icon="info_outline"
      />
      <Clearfix />
    </div>
  );
}
