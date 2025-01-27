import { CourseInfo } from "../CourseInfo";
import { mockedAuthorsList, mockedCoursesList } from "../../constants";
import { Courses } from "../Courses";
import { useState } from "react";

const Home: React.FC = () => {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const handleShowCourse = (id: string) => {
    setSelectedCourseId(id);
  };

  const handleBack = () => {
    setSelectedCourseId(null);
  };

  const handleAddCourse = () => {
    console.log("Add new course");
  };

  return (
    <>
      {selectedCourseId ? (
        <CourseInfo
          coursesList={mockedCoursesList}
          authorsList={mockedAuthorsList}
          onBack={handleBack}
          showCourseId={selectedCourseId}
        />
      ) : (
        <Courses
          coursesList={mockedCoursesList}
          authorsList={mockedAuthorsList}
          handleShowCourse={handleShowCourse}
          handleAddCourse={handleAddCourse}
        />
      )}
    </>
  );
};

export default Home;
