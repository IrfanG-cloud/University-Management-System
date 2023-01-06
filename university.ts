import {Student} from "./student.js";
import { Course } from "./course.js";

class University{
    students:Student[];
    courses:Course[];
    constructor(){
        this.students = [];
        this.courses = [];
    }
    addStudent(student:Student){
        this.students.push(student);

    }

}

export{University};