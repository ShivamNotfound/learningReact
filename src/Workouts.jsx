import './App.css'
function Workouts(props)
{
    const hideCard = (id) => {
        const card = document.getElementById(id);
        card.style.backgroundColor = props.color;
    }
    let id = Math.floor(Math.random() * (50000000))
    if(props.name == "")
    {
        return (
        <>
            <div className = "workout_card" id = {id} onClick = {() => hideCard(id)}>Unknown</div>
        </>)
    }
    return(
        <>
            <div className = "workout_card" id = {id} onClick = {() => hideCard(id)}>
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