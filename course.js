class Course {
    course_id;
    course_name;
    students;
    constructor(courseId, courseName) {
        this.course_id = courseId;
        this.course_name = courseName;
        this.students = [];
    }
}
export { Course };
