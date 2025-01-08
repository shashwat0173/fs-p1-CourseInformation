const Total = (props) => {
    console.log('Total Component', props)
    return (
        <>
            <p><b>total of {props.total} exercises</b></p>
        </>
    )
}

export default Total