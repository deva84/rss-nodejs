export interface CourseCardProps {
  course: Course;
  handleShowCourse: (course: string) => void;
  authorsList: Author[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  authors: string[];
  duration: number;
  creationDate: string;
}

export interface Author {
  id: string;
  name: string;
}

export enum ButtonAction {
  ADD = "add",
  DELETE = "delete",
  UPDATE = "update",
}

export interface CoursesProps {
  coursesList: Course[];
  authorsList: Author[];
  handleShowCourse: (id: string) => void;
}
