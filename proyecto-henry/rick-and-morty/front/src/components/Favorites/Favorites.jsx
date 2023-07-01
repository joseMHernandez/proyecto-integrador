import { connect, useDispatch } from "react-redux"
import { useState } from "react"
import Cards from "../Cards/Cards"
import { filterCards, orderCards } from "../../redux/actions"

function Favorites ({myFavorites}) {
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false)

    const handleChange = (event) => {
        const {value, name} = event.target
        switch (name) {
            case "filter":
                dispatch(filterCards(value))
                break
            case "order":
                dispatch(orderCards(value))
                setAux(!aux)
                break
            default:
                break;
        }
    }

    return (
        <div>
            <div>
                <select name="order" onChange={handleChange}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select name="filter" onChange={handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
        <div>

            <Cards characters={myFavorites}  />
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites)