import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Button } from "../../common";
import { ButtonAction, Course, CoursesProps } from "./courses.model";
import { CourseCard, EmptyCourseList, SearchBar } from "./components";
// Module 2:
// * render this component by route '/courses'
// * navigate to this component if 'localStorage' contains user's token
// * navigate to the route courses/add by clicking 'Add New Course' button, use 'Link' component from 'react-router-dom'
// ** TASK DESCRIPTION ** - https://ebook.learn.epam.com/react-fundamentals/docs/module-2/home-task/components#courses

// Module 3:
// * stop using mocked courses and authors data
// * delete props 'coursesList' and 'authorsList'
// * use useSelector to get courses and authors from the store
// ** TASK DESCRIPTION ** - https://ebook.learn.epam.com/react-fundamentals/docs/module-3/home-task/components#courses-component

// Module 4:
// navigate to '/courses/add' route by clicking 'ADD NEW COURSE' button in the 'EmptyCourseList'.
// show message 'You don't have permissions to create a course. Please log in as ADMIN' by clicking ADD NEW COURSE button in the 'EmptyCourseList'.
// ** TASK DESCRIPTION ** - https://ebook.learn.epam.com/react-fundamentals/docs/module-4/home-task/components#emptycourselist-component

// Module 5:
// * proposed cases for unit tests:
//   ** Courses should display amount of CourseCard equal length of courses array.
//   ** CourseForm should be shown after a click on the "Add new course" button.

export const Courses: React.FC<CoursesProps> = ({
  coursesList,
  authorsList,
  handleShowCourse,
  handleAddCourse,
}) => {
  const [coursesToShow, setCoursesToShow] = useState<Course[]>(coursesList);
  if (!coursesList.length) {
    return <EmptyCourseList data-testid="emptyContainer" />;
  }

  const getFilteredCourses = (searchValue?: string | null): Course[] => {
    if (!searchValue) {
      return coursesList;
    }

    const query = searchValue.toLowerCase();

    return coursesList.filter((course) => {
      const title = course.title.toLowerCase();
      const id = course.id.toLowerCase();
      return title.includes(query) || id.includes(query);
    });
  };

  const handleSearch = (searchValue?: string | null): void => {
    const filteredCourses = getFilteredCourses(searchValue);
    setCoursesToShow(filteredCourses);
  };

  return (
    <>
      <div className={styles.panel}>
        <div className={styles.searchWrapper}>
          <SearchBar handleSearch={handleSearch} />
        </div>
        <Button
          buttonText="Add New Course"
          handleClick={handleAddCourse}
          data-testid="addCourse"
        />
      </div>
      {coursesToShow.length ? (
        coursesToShow.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            handleShowCourse={handleShowCourse}
            authorsList={authorsList}
          />
        ))
      ) : (
        <p>No courses found!</p>
      )}
    </>
  );
};
