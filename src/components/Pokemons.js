import axios from 'axios'
import { Col, Container, Row } from 'reactstrap'
import { useState, useEffect } from 'react'
import PokeCard from './PokeCard'
import { Link } from 'react-router-dom'




const Pokemons = () => {

    const [pokemons, setPokemons] = useState([])
    const API = `https://pokeapi.co/api/v2/pokemon?limit=100`

    useEffect(() => {
        fetchPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchPokemons = async () => {
        await axios.get(API)
                   .then(response => setPokemons(response.data.results))
    }

    const getPokeUrl = (url) => {
         url = url.split('/')
         url = url[6]
         return url
    }


    return(
        <Container>
            <Row>
            {pokemons.map(pokemon => {
                return(
                    <Col>
                         <Link to={`/pokemon/${getPokeUrl(pokemon.url)}`} > <PokeCard name={pokemon.name}/></Link> 
                    </Col>
                )
            })}
            </Row>

        </Container>
    )

}

export default Pokemons