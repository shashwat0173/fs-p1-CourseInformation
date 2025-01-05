import Header from './Header'
import Course from './Course'
import Total from './Total'

const App = () =>{

  const course = 'Half Stack application development'
  const topicList = [
    {name : 'Fundamentals of React', exercises : 10},
    {name : 'Using props to pass data', exercises : 7},
    {name : 'State of a component', exercises : 14}
  ]
  return (
    <>
      <Header course = {course}/>
      <Course topicList = {topicList}/>
      <Total total={topicList.reduce((sum, course) => sum + course.exercises, 0)}/>
    </>
  )
}

export default App
