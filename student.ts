import { Person } from "./person.js";
import { Course } from "./course.js";

class Student extends Person{
    courses:Course[];
    constructor(name: string, id:number){
        super(name, id);
        this.courses = [];
    }
}

export {Student}