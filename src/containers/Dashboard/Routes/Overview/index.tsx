import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GET_STUDENT_COURSE,
  UNREGISTER_COURSE,
} from "../../../../services/queries";

import "./index.scss";
import { ICourse } from "../../../../interfaces";

const Overview = ({ student }) => {
  const { loading, error, data, refetch } = useQuery(GET_STUDENT_COURSE);
  const [removeCourse] = useMutation(UNREGISTER_COURSE);
  let content: JSX.Element;

  useEffect(() => {
    refetch();
  }, [refetch]);

  const unregisterCourse = async (course_id: string) => {
    try {
      const isSure = window.confirm(
        "Are you sure you want to unregister this course ?",
      );
      if (!isSure) {
        return;
      }
      await removeCourse({ variables: { id: course_id } });
      refetch();
      alert("course unregistered successfully");
    } catch (error) {
      alert("There has been an error unregistering this course");
    }
  };

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
          {data.student_courses.courses.map((course: ICourse) => (
            <div
              key={course.code}
              className="course_card"
              onClick={() => {
                unregisterCourse(course.id);
              }}
            >
              <div>
                <div>
                  <p>COURSE CODE</p>
                  <p>{course.code}</p>
                </div>
                <div>
                  <p>COURSE SEMESTER</p>
                  <p>{course.semester}</p>
                </div>
              </div>
              <div>
                <div>
                  <p>COURSE TITLE</p>
                  <p>{course.title}</p>
                </div>
                <div>
                  <p>COURSE CREDIT LOAD</p>
                  <p>{course.credit_load}</p>
                </div>
              </div>
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
