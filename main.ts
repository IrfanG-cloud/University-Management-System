import inquirer from "inquirer";
import { University } from "./university.js";


async function main(){
    let que = await inquirer 
    .prompt([
        {
            type: "list",
            name: "usr_input",
            message:"Enter your data",
            choices: ["Add Students", "Add Courses", "Add Teachers"]
        }
    ]);
    const university = new University(); 
    if(que.usr_input == "Add Students"){
        let student_details = await inquirer 
    .prompt([
        {
            type: "input",
            name: "usr_input",
            message:"Enter your student id",
        }
    ]);
    }

}
