import { Author, Course } from "../Courses";

export interface CourseInfoProps {
  coursesList: Course[];
  authorsList: Author[];
  onBack: () => void;
  showCourseId: string;
  "data-testid"?: string;
}
