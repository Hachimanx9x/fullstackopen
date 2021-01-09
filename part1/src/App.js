
const Header  = (props) => {
  return (
    <div>
      <h1>{props.course }</h1>
      </div>
  )
}
const Part  = (props) => {
  return(
    <div>
    <p>
      <h3>part {props.name}</h3>
      <p>associated exercise => {props.exercise} </p>
    </p>
    </div>
  );
}
const Content   = (props) => {
  const exercisex1 = "number of exercises "+props.exercise1
  const exercisex2 = "number of exercises "+props.exercise2
  const exercisex3 = "number of exercises "+props.exercise3
  return (
    <div>
      <Part name ={props.name1} exercise={exercisex1}/>
      <Part name ={props.name2} exercise={exercisex2}/>
      <Part name ={props.name2} exercise={exercisex3}/>
      </div>
  )
}
const Total   = (props) => {
  return (
    <div>
      <p>total number of exercises {props.exercise }</p>
      </div>
  )
}
function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

   return (
     <div>
       <h1>Greetings</h1>
       <Header course={course} />
       <Content
       name1={part1}
       name2={part2}
       name3={part3}
       exercise1={exercises1}
       exercise2={exercises2}
       exercise3={exercises3}
         />
       <Total exercise={exercises1 + exercises2 + exercises3} />
     </div>
   )
}

export default App;
