import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = (props) => {
    console.log('Course Component', props)
    const {course} = props
    return (
        <>
            <Header course = {course.name}/>
            <Content parts = {course.parts}/>
            <Total total={course.parts.reduce((sum, course) => sum + course.exercises, 0)}/>
        </>

    )
}

export default Course