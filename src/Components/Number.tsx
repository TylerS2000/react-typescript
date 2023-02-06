interface courses{
    name:string,
    exerciseCount:number    
}
interface courseParts{
    courseParts:Array<courses>
}
export default function Number(props:courseParts){
return(
    <div>
        {props.courseParts.reduce((accumulator,value)=>{return accumulator+value.exerciseCount},0)}
    </div>
)
}