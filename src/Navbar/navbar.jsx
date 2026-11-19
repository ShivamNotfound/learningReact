import '../App.css'
import styles from './navbar.module.css'
function Navbar()
{
    return(
        <ul className = {styles.navbar}>
            <li>Home</li>
            <li>Equipments</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    )
}

export default Navbar