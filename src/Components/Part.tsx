import { CoursePart } from "../customTypings"

export default function Part({course}:{course:CoursePart}){
    switch(course.name){
     case"Fundamentals":
     return (<p>
        {course.name}:{course.exerciseCount}
    </p>) 
     
     case"Using props to pass data":
     return (<p>
        {course.name}:{course.exerciseCount}
    </p>)
    
     case "Deeper type usage":
        return (<p>
            {course.name}:{course.exerciseCount}
        </p>)
     
     default:
        return (<p>
            {course.name}:{course.exerciseCount}
        </p>)
    }
}