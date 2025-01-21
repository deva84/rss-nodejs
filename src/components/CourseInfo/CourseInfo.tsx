// This component shows information about the current chosen course.

// Module 1.
// * Use template to show course's information:
// ** ID of course;
// ** Title;
// ** Description;
// ** Duration;
// ** List of authors;
// ** Creation date;
// * use <Button /> component to replace CourseInfo component with Courses component
// ** TASK DESCRIPTION ** - https://ebook.learn.epam.com/react-fundamentals/docs/module-1/home-task/components#course-info

// Module 2.
// * render component by route '/courses/:courseId'
// * use 'useParam' hook to get course id, remove prop 'showCourseId'
// * remove 'onBack' prop
// * use '<Link />' instead <Button /> component for 'BACK' button
// ** TASK DESCRIPTION ** - https://ebook.learn.epam.com/react-fundamentals/docs/module-2/home-task/components#course-info

// Module 3.
// * remove props 'coursesList', 'authorsList'
// * use selectors from store/selectors.ts to get coursesList, authorsList from store

import React from "react";

import {
  formatCreationDate,
  getAuthorsList,
  getCourseDuration,
} from "../../helpers";

import styles from "./styles.module.css";
import { CourseInfoProps } from "./courseInfo.model";
import { Button } from "../../common";

// props description
// * 'coursesList' - list of all courses. You need it to get chosen course from the list
// * 'authorsList' - list of all authors. You need it to get authors' names for chosen course
// * 'showCourseId' - id of chosen course. Use it to find needed course on the 'coursesList'.
export const CourseInfo: React.FC<CourseInfoProps> = ({
  coursesList,
  authorsList,
  onBack,
  showCourseId,
}) => {
  const course = coursesList.find((course) => course.id === showCourseId);

  const duration = getCourseDuration(course?.duration);
  const durationTime = duration.split(" ")[0];
  const durationUnits = duration.split(" ")[1];

  const date = formatCreationDate(course?.creationDate);

  const authors = getAuthorsList(course?.authors, authorsList);

  return (
    <div className={styles.container} data-testid="courseInfo">
      <h1>{course?.title}</h1>
      <div className={styles.courseInfo}>
        <p className={styles.description}>
          <span className={`${styles.descriptionLabel} ${styles.label}`}>
            Description:{" "}
          </span>
          {course?.description}
        </p>
        <div>
          <p>
            <b className={styles.label}>ID: </b>
            {course?.id}
          </p>
          <p>
            <b className={styles.label}>Duration: </b>
            <span className={styles.durationTime}>{durationTime}</span>
            <span> {durationUnits}</span>
          </p>
          <p>
            <b className={styles.label}>Created: </b>
            {date}
          </p>
          <div>
            <b className={styles.label}>Authors: </b>
            <span className={styles.authorsList}>{authors.join(", ")}</span>
          </div>
        </div>
      </div>
      <div className={styles.backButton}>
        <Button buttonText="Back" handleClick={onBack} />
      </div>
    </div>
  );
};
// Module 2: use 'react-router-dom' 'Link' component for button 'Back' and
// remove 'onBack' prop
