import React from "react";

import styles from "./styles.module.css";
import { Button } from "../../../../common";

export const EmptyCourseList = () => {
  const handleClick = () => {
    console.log("Redirect to add course page");
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Your List Is Empty</h3>
      <p>Please use ’Add New Course’ button to add your first course</p>
      <div className={styles.button}>
        <Button
          buttonText="Add New Course"
          handleClick={handleClick}
          data-testid="addCourse"
        />
      </div>
    </div>
  );
};
