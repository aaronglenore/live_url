import Courses from "./CoursesClass.js";
import Student from "./StudentClass.js";


//Courses

const CourseA = new Courses("Calculus 1", "MTH", "1001", "Professor A", 4, 10001); 
const CourseB = new Courses("Intro to Coding", "CSE", "1200", "Dr A", 3, 30001); 
const CourseC = new Courses("Architecture", "ECE", "2002", "Dr B", 4, 40001); 



//students

const StudentA = new Student(100001, "Tim", "Computer Engineering", "Sophmore", true)
const StudentB = new Student(100002, "John", "Computer Science", "Sophmore", true)
const StudentC = new Student(100003, "Adam", "Computer Engineering", "Senior", true)
const StudentD = new Student(100004, "Mark", "History", "Freshman", true)


//Courses with Students

StudentA.courses = new Array(CourseB,CourseC,CourseA);
StudentB.courses = new Array(CourseA,CourseC,CourseB);
StudentC.courses = new Array(CourseA,CourseB,CourseC);
StudentD.courses = new Array(CourseB,CourseA);

//Display with HTML

const change = 
`
    <h1>List of Courses</h1>

    <h3>Course A: ${CourseA.courseDepartment}${CourseA.courseCode}, ${CourseA.courseName}, ${CourseA.courseInstructor}, ${CourseA.courseCredits} Credits, ID (Internal Use Only:) ${CourseA.courseID}</h3>
    <h3>Course B: ${CourseB.courseDepartment}${CourseB.courseCode}, ${CourseB.courseName}, ${CourseB.courseInstructor}, ${CourseB.courseCredits} Credits, ID (Internal Use Only:) ${CourseB.courseID}</h3>
    <h3>Course C: ${CourseC.courseDepartment}${CourseC.courseCode}, ${CourseC.courseName}, ${CourseC.courseInstructor}, ${CourseC.courseCredits} Credits, ID (Internal Use Only:) ${CourseC.courseID}</h3>
    

    <h1>List of Students</h1>

    <h3>Student A: ID:${StudentA.studentID}, ${StudentA.studentName}, ${StudentA.studentMajor}, ${StudentA.studentStanding}, Allowed To Enroll: ${StudentA.studentAllowed}</h3>
    <h3>Student B: ID:${StudentB.studentID}, ${StudentB.studentName}, ${StudentB.studentMajor}, ${StudentB.studentStanding}, Allowed To Enroll: ${StudentB.studentAllowed}</h3>
    <h3>Student C: ID:${StudentC.studentID}, ${StudentC.studentName}, ${StudentC.studentMajor}, ${StudentC.studentStanding}, Allowed To Enroll: ${StudentC.studentAllowed}</h3>
    

`
document.body.innerHTML = change;