const Total = (props) => {
    console.log('Total Component', props)
    return (
        <>
            <p>Number of exercises {props.total}</p>
        </>
    )
}

export default Total