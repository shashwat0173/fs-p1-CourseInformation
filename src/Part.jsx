const Part = (props) => {
    console.log('Part Component', props)
    return (
        <>
            <p>
                {props.name} {props.exercises}
            </p>
        </>
    )
}

export default Part