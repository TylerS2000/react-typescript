import Header from "./Components/Header";
import Courses from "./Components/Courses";
import Number from "./Components/Number";
import { CoursePart } from "./customTypings";
const App = () => {
  
  const courseName = "Half Stack application development";


// this is the new coursePart variable
const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is the easy course part",
    type: "normal"
  },
  {
    name: "Advanced",
    exerciseCount: 7,
    description: "This is the hard course part",
    type: "normal"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3,
    type: "groupProject"
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    type: "submission"
  }
]



  return (
    <div>
      <Header courseName={courseName}/>
      <Courses courseParts={courseParts}/>
      <Number courseParts={courseParts}/>
    </div>
  );
};

export default App;