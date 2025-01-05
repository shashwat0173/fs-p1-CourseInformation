import Part from './Part'

const Course = (props) => {
    return (
        <>
            {props.topicList.map((topic, index) => <Part key={index} topic = {topic.name} exercises = {topic.exercises}/>)}
        </>

    )
}

export default Course