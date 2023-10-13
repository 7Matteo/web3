import { useContext } from "react"
import { Context } from "../../contexts/counterContext"


const BadButton = () => {
    const {increaseBad} = useContext(Context)
/*
    const changeValue = () => {
        resetAll
    }*/

    return (
        <div>
            <button onClick={increaseBad} type="button">increase bad</button>
        </div>
    )

}

export default BadButton