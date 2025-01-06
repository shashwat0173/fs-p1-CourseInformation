const Header = (props) => {
    console.log('Header Component', props)
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

export default Header