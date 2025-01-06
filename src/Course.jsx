import Part from './Part'

const Course = (props) => {
    console.log('Course Component', props)
    return (
        <>
            {props.parts.map((part, index) => <Part key={index} name = {part.name} exercises = {part.exercises}/>)}
        </>

    )
}

export default Course