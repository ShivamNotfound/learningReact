import Workouts from "./Workouts.jsx"

function List(props)
{
    const list_items = props.list.map(item => 
        <Workouts color = {props.color} name = {item.name} muscle = {item.muscle} type = {item.type} />
    )

    return(<div>
        {list_items}
    </div>)
}

export default List;