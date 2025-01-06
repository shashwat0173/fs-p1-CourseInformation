import Header from './Header'
import Course from './Course'
import Total from './Total'

const App = () =>{

  const course =  {
    name : 'Half Stack application development',
    parts : [
      {name : 'Fundamentals of React', exercises : 10},
      {name : 'Using props to pass data', exercises : 7},
      {name : 'State of a component', exercises : 14}
    ]
  }
  return (
    <>
      <Header course = {course.name}/>
      <Course parts = {course.parts}/>
      <Total total={course.parts.reduce((sum, course) => sum + course.exercises, 0)}/>
    </>
  )
}

export default App
