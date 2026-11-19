import './App.css'
function Workouts(props)
{
    if(props.name == "")
    {
        return (
        <>
            <div className = "workout_card">Unknown</div>
        </>)
    }
    return(
        <>
            <div className = "workout_card">
                <p>
                    Name: {props.name}
                </p>
                <p>
                    Muscle: {props.muscle}
                </p>
                <p>
                    Type: {props.type}
                </p>
            </div>
        </>
    )
}


export default Workouts