import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Pokemon from "./components/Pokemon";
import Pokemons from "./components/Pokemons";


const MyRouter = () => {
    return(
        <Router>
            <NavBar />
            <Switch>
                <Route exact path='/pokemons' component={Pokemons} />
                <Route exact path='/pokemon/:id' component={Pokemon}/>
            </Switch>
        </Router>
    )
}

export default MyRouter