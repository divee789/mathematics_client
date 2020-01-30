import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get_level_courses } from '../../../../store/actions'

//Hillsong - Like Incense (Sometimes By Step)
import './index.scss'

const Overview: React.FC = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state: any) => state.auth)
    useEffect(() => {
        console.log('user', user)
        const check = async () => {
            try {
                dispatch(get_level_courses(user.level));
            } catch (error) {
                // if refresh token has expired, dispatch LOGOUT THINGS
                console.log('error', error);
                throw error;
            }
        };
        check()
    }, [dispatch]);
    const { courses, processing } = useSelector((state: any) => state.course);
    let content: any;
    if (processing === true) {
        content = <p className='info_alert'>Getting level courses</p>
    }
    if (courses !== null) {
        content = <table>
            <tbody>
                <tr>
                    <th>Course code</th>
                    <th>Semester</th>
                    <th>Course title</th>
                    <th>Credit load</th>
                </tr>
                {courses.map((course: any) =>
                    <tr key={course.title}>
                        <td>{course.course_code}</td>
                        <td>{course.semester}</td>
                        <td>{course.title}</td>
                        <td>{course.credit_load}</td>
                    </tr>
                )}
            </tbody>
        </table>
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
                                <p className='detail_title'>Current Level</p>
                                <p className='detail_text'>{user.level}</p>
                            </div>
                            <div className='course_adviser'>
                                <p className='detail_title'>Course Adviser</p>
                                <p className='detail_text'>Prof. Charles Charles</p>
                            </div>
                        </div>
                        <hr />
                        <div className='over_course_body'>
                            <h3>Level Courses</h3>
                            {content}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Overview