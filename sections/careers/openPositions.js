import React from "react";
import JobItem from "../../component/careers/positionItem/jobItem";
import classes from "../careers/styles/styles.module.css";

export const OpenPositions = () => {
  return (
    <div className={classes.openPositionsSection}>
      <div className={classes.sectionTitle}>CURRENTLY OPEN POSITIONS</div>
      <div className={classes.jobItemsContainer}>
        <JobItem />
        <JobItem /> <JobItem /> <JobItem /> <JobItem /> <JobItem />
      </div>
    </div>
  );
};
