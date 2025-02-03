// // Module 1. You don't need to do anything with this component (we had to comment this component for 1st module tests)

// // Module 2.
// // * uncomment this component (ctrl + a => ctrl + /)
// // * add functionality to create new course with:
// //   ** title
// //   ** description
// //   ** duration (user enters in minutes, you should map in format «hh:mm»)
// //   ** existing authors (use 'authorsList' prop)
// //   ** new created author (create field and button, update 'authorsList')
// //   ** user should be able to remove author from the course
// //   ** add validation to the fields
// //   ** add new course to the 'coursesList' and navigate to the '/courses' page => new course should be in the courses list
// // ** TASK DESCRIPTION ** - https://ebook.learn.epam.com/react-fundamentals/docs/module-2/home-task/components#add-new-course

// // Module 3.
// // * remove props - authorsList, createCourse, createAuthor
// // * use selector from store/selectors.ts to get authorsList from store
// // * save new course to the store. Use action 'saveCourse' from 'src/store/slices/coursesSlice'
// // * save new author to the store. Use action 'saveAuthor' from 'src/store/slices/authorsSlice'
// // ** TASK DESCRIPTION ** - https://ebook.learn.epam.com/react-fundamentals/docs/module-3/home-task/components#add-new-course

// // Module 4.
// // * render this component only for ADMIN user
// // * in this module you should separate functionality for this component:
// //   ** create mode:
// //     * form for the course creation should be opened by 'courses/add' route by 'ADD NEW COURSE' button click (as before)
// //     * make a request to save new course
// //     * use 'createCourse' service from 'src/services.ts' and 'createCourseThunk' thunk from 'src/store/thinks/coursesThunk.ts'
// //     * use 'createAuthor ' service from 'src/services.ts' and 'createAuthorThunk' thunk from 'src/store/thinks/authorsThunk.ts'
// //     * save new course to the store after success response
// // ** TASK DESCRIPTION ** - https://ebook.learn.epam.com/react-fundamentals/docs/module-4/home-task/components#add-new-course
// //   ** update mode:
// //     * form should be opened by route '/courses/update/:courseId' route by 'update' button click
// //     * appropriate forms field should be prefilled with course's info
// //     * user should have ability to modify course information in the fields and change authors list
// //     * make a request to save updated course
// //     * use 'updateCourseService' from 'src/services.ts' and 'updateCourseThunk' thunk from 'src/store/thinks/coursesThunk.ts'
// //     save updated course to the store after success response.
// // ** TASK DESCRIPTION ** - https://ebook.learn.epam.com/react-fundamentals/docs/module-4/home-task/components#update-course

// // Module 5:
// // * proposed cases for unit tests:
// //   ** CourseForm should show authors lists (all and course authors).
// //   **  CourseForm 'Create author' button click should call dispatch.
// //   **  CourseForm 'Add author' button click should add an author to the course authors list.
// //   **  CourseForm 'Delete author' button click should delete an author from the course list.

// import React from "react";

// import styles from "./styles.module.scss";

// export const CourseForm = ({ authorsList, createCourse, createAuthor }) => {
//   //write your code here

//   return (
//     <div className={styles.container}>

//       <h2>// render title - Course edit or Create page</h2>

//       <form>

//         // reuse Input component for title field with data-testid="titleInput"

//         <label>
//           Description
//           <textarea
//             className={styles.description}
//             data-testid="descriptionTextArea"
//           />
//         </label>

//         <div className={styles.infoWrapper}>
//           <div>

//             <div className={styles.duration}>
//               // reuse Input component with data-testid='durationInput' for duration field

//               <p>// render duration. use getCourseDuration helper</p>
//             </div>

//             <h2>Authors</h2>
//             // use CreateAuthor component

//             <div className={styles.authorsContainer}>
//               <h3>Authors List</h3>

//               // use 'map' to display all available autors. Reuse 'AuthorItem' component for each author
//             </div>

//           </div>

//           <div className={styles.courseAuthorsContainer}>
//             <h2>Course authors</h2>
//             // use 'map' to display course autors. Reuse 'AuthorItem' component for each author
//             <p className={styles.notification}>List is empty</p> // display this
//             paragraph if there are no authors in the course
//           </div>

//         </div>

//       </form>

//       <div className={styles.buttonsContainer}>
//         // reuse Button component for 'CREATE/UPDATE COURSE' button with
//         // reuse Button component for 'CANCEL' button with
//       </div>

//     </div>
//   );
// };
export {};
