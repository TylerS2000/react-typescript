

interface courses{
    name:string,
    exerciseCount:number    
}
interface courseParts{
    courseParts:Array<courses>
}
export default function Courses(props:courseParts){
        const course = props.courseParts.map((course)=>{
            return <p>
                {course.name}:{course.exerciseCount}
            </p>
        }
        )
        return(
            <div>
                {course}
            </div>
        )
}