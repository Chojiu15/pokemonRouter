import { Link, NavLink } from "react-router-dom";



const NavBar = () => {
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/pokemons'>Pokemons</Link>
        </div>
    )
}

export default NavBar