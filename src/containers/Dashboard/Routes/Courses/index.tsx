import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_LEVEL_COURSES } from "../../../../services/queries";
import { ICourse } from "../../../../interfaces";

import "./index.scss";

const Courses = () => {
  const [level, setLevel] = useState(100);
  const { loading, error, data } = useQuery(GET_LEVEL_COURSES, {
    variables: {
      level,
    },
  });
  let content: JSX.Element;

  if (loading)
    content = (
      <p style={{ textAlign: "center", marginTop: 30 }}>Loading Courses...</p>
    );

  if (error) console.log(error);
  content = (
    <p style={{ textAlign: "center", marginTop: 30 }}>
      There has been an error fetching the courses, please refresh the page.
    </p>
  );

  if (data) {
    console.log(data);
    content = data.coursesByLevel.map((course: ICourse) => (
      <div key={course.code} className="course_card">
        <p>
          {course.lecturer
            ? `${course.lecturer.first_name} ${course.lecturer.last_name}`
            : "No Lecturer Assigned"}
        </p>
        <p>{course.code}</p>
        <p>{course.semester}</p>
        <p>{course.title}</p>
        <p>{course.credit_load}</p>
      </div>
    ));
  }

  return (
    <>
      <section>
        <div className="navbar">
          <p className="title">Courses</p>
        </div>
        <div className="container">
          <div className="scroll">
            <div className="">
              <p
                onClick={() => {
                  setLevel(100);
                }}
              >
                100L
              </p>
              <p
                onClick={() => {
                  setLevel(200);
                }}
              >
                200L
              </p>
              <p
                onClick={() => {
                  setLevel(100);
                }}
              >
                300L
              </p>
              <p
                onClick={() => {
                  setLevel(100);
                }}
              >
                400L
              </p>
            </div>
            <div>{content}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
