export interface Course {
    id: number,
    title: string,
    course_code: string,
    credit_load: number,
    semester: number,
    level: number,
    lecturer: object,
    lecturerId:number
}

export interface CourseState{
    courses: Course[],
    course: Course,
    processing: boolean,
    error: any
}