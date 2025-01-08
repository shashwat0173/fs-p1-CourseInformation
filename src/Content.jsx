import Part from './Part'

const Content = (props) => {
    console.log('Content Component', props)
    return (
        <>
            {props.parts.map((part, index) => <Part key={index} name = {part.name} exercises = {part.exercises}/>)}
        </>

    )
}

export default Content