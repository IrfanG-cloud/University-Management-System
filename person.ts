
class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name
    }
    }

class Student extends Person{
    rollNumber: string;
    courses: string[] = [];

    constructor(name: string, age: number, rollNumber: string){
        super(name, age);
        this.rollNumber = rollNumber;
    }

    registerForCourses(course: string){
        this.courses.push(course)
    }
}

class Instructor extends Person{
    salary: number;
    courses: string[] = [];

    constructor(name:string, age: number, salary: number){
        super(name, age);
        this.salary = salary

    }
    assignCourse(course: string){
        this.courses.push(course)
    }

}

const student1 = new Student("Daniyal", 21, "student1")
const student2 = new Student("Ali", 22, "student2")
const instructor1 = new Instructor("Sir Ali", 20, 30000)
const instructor2 = new Instructor("Sir Daniyal", 20, 20000)


// student1.registerForCourses("Metaverse")
// console.log(student1.courses)


// instructor1.assignCourse("Metaverse")
// instructor1.assignCourse("BCC")
// instructor1.assignCourse("CNC")
// console.log(instructor1.assignCourse)

// student1.registerForCourses("Metaverse")
// console.log(student1.courses)

// console.log(student1)
// console.log(instructor1)

export {Person}