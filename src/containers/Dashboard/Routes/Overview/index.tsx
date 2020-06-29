import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_STUDENT_COURSE } from "../../../../services/queries";

import "./index.scss";

const Overview = ({ student }) => {
  const { loading, error, data } = useQuery(GET_STUDENT_COURSE);
  let content: JSX.Element;

  if (loading)
    content = (
      <p style={{ textAlign: "center", marginTop: 30 }}>Loading Courses... </p>
    );
  if (error) {
    content = (
      <p style={{ textAlign: "center", marginTop: 30 }}>
        There has been an error fetching your courses
      </p>
    );
  }
  if (data) {
    content =
      data.student_courses.courses.length !== 0 ? (
        <div className="card_container">
          {data.student_courses.courses.map((course: any) => (
            <div key={course.code} className="course_card">
              <p>{course.code}</p>
              <p>{course.semester}</p>
              <p>{course.title}</p>
              <p>{course.credit_load}</p>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: 30 }}>
          You have no registered courses
        </p>
      );
  }

  return (
    <>
      <section>
        <div className="navbar">
          <p className="title">Overview</p>
        </div>
        <div className="container">
          <div className="scroll">
            <div className="academics_details">
              <div>
                <p className="detail_title">Current Level</p>
                <p className="detail_text">{student.level}</p>
              </div>
              <div className="course_adviser">
                <p className="detail_title">Course Adviser</p>
                <p className="detail_text">Prof. Charles Charles</p>
              </div>
              <div className="cumulative GPA">
                <p className="detail_title">Cumulative GPA</p>
                <p className="detail_text">4.59</p>
              </div>
            </div>
            <hr />
            <div className="over_course_body">
              <h3>REGISTERED COURSES</h3>
              {content}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
