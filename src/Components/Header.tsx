interface HeaderProps{
    courseName:string
   }
export default function  Header (props: HeaderProps): JSX.Element {
  return (
    <h1>{props.courseName}</h1>
  );
}