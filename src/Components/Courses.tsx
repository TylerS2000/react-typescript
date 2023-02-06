import Part from "./Part"
import { CoursePart } from "../customTypings"

interface courseParts{
    courseParts:Array<CoursePart>
}

export default function Courses(props:courseParts){
   
         
            
        return(
            <div>
                {props.courseParts.map((part)=>{
                    return<Part course={part}/>
                }
                )}
            </div>
        )
}