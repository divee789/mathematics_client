import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_LEVEL_COURSES } from "../../../../services/queries";

import "./index.scss";

const Overview = ({ student }) => {
  const { loading, error, data } = useQuery(GET_LEVEL_COURSES, {
    variables: {
      level: student.level,
    },
  });

  let content;

  if (loading) content = <p>Loading Courses... </p>;
  if (error) {
    console.log(error);
    content = <p>There has been an error fetching your courses</p>;
  }
  if (data) {
    content = (
      <table>
        <tbody>
          <tr>
            <th>Course code</th>
            <th>Semester</th>
            <th>Course title</th>
            <th>Credit load</th>
          </tr>
          {data.coursesByLevel.map((course: any) => (
            <tr key={course.title}>
              <td>{course.code}</td>
              <td>{course.semester}</td>
              <td>{course.title}</td>
              <td>{course.credit_load}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
            </div>
            <hr />
            <div className="over_course_body">
              <h3>Level Courses</h3>
              {content}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
