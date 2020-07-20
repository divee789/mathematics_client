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
  let content: JSX.Element = null;

  if (loading)
    content = (
      <p style={{ textAlign: "center", marginTop: 30 }}>Loading Courses...</p>
    );

  if (error) {
    console.log(error);
    content = (
      <p style={{ textAlign: "center", marginTop: 30 }}>
        There has been an error fetching the courses, please refresh the page.
      </p>
    );
  }

  if (data?.coursesByLevel.length > 0) {
    console.log(data);
    content = data.coursesByLevel.map((course: ICourse) => (
      <div key={course.code} className="course_card">
        <div>
          <p>
            CREDIT_LOAD: <span>{course.credit_load}</span>
          </p>
          <p>
            CODE: <span>{course.code}</span>
          </p>
          <p>
            LECTURER:
            <span>
              {course.lecturer
                ? `${course.lecturer.first_name} ${course.lecturer.last_name}`
                : "No Lecturer Assigned"}
            </span>
          </p>
        </div>
        <div>
          <p>
            SEMESTER: <span>{course.semester}</span>
          </p>
          <p>
            TITLE: <span>{course.title}</span>
          </p>
        </div>
      </div>
    ));
  } else {
    content = (
      <p style={{ textAlign: "center", marginTop: 70 }}>
        {" "}
        There is nothing to show here{" "}
      </p>
    );
  }

  return (
    <>
      <section className="courses_section">
        <div className="navbar">
          <p className="title">Courses</p>
        </div>
        <div className="container">
          <div className="scroll">
            <div className="choice">
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
                  setLevel(300);
                }}
              >
                300L
              </p>
              <p
                onClick={() => {
                  setLevel(400);
                }}
              >
                400L
              </p>
            </div>
            <div className="card_container">{content}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
