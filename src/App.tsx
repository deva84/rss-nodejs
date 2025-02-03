import React from "react";
import styles from "./App.module.scss";
import { Header } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from "./routes";

// Module 2:
// * use mockedAuthorsList and mockedCoursesList mocked data
// * remove useState for selected courseId
// * use hook useState for storing list of courses and authors
// * import Routes and Route from 'react-router-dom'
// * Add Routes to the container div (do not include Header to the Routes since header will not be changed with pages)
// ** TASK DESCRIPTION ** -
// https://ebook.learn.epam.com/react-fundamentals/docs/module-2/home-task/components#add-the-router-to-the-app-component

// Module 3:
// * the App component and BrowserRouter components should be wrapped with Redux 'Provider' in src/index.tsx
// * remove 'mockedAuthorsList' and 'mockedCoursesList' constants amd import and their use throughout the project
// * use selector from store/selectors.ts to get user token from store
// * get courses and authors from the server. Use courses/all and authors/all GET requests.
// * save courses and authors to the store. Use 'setCourses' and 'setAuthors' actions from appropriate slices here
// 'src/store/slices' ** TASK DESCRIPTION ** -
// https://ebook.learn.epam.com/react-fundamentals/docs/module-3/home-task/components#app-component

// Module 4:
// * rewrite old GET requests /courses/all with 'getCoursesThunk' from 'src/store/thunks/coursesThunk.ts' using
// getCourses service from 'src/services.ts'. * rewrite old GET requests /authors/all with 'getAuthorsThunk' from
// 'src/store/thunks/authorsThunk.ts' using getAuthors service from 'src/services.ts'. * wrap 'CourseForm' in the
// 'PrivateRoute' component * get authorized user info by 'user/me' GET request if 'localStorage' contains token

export default function App() {
  const router = createBrowserRouter(routesConfig);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
