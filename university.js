class University {
    students;
    courses;
    constructor() {
        this.students = [];
        this.courses = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
}
export { University };
