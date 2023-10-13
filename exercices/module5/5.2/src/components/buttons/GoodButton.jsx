import { useContext } from "react"
import { Context } from "../../contexts/counterContext"


const GoodButton = () => {
    const {increaseGood} = useContext(Context)
/*
    const changeValue = () => {
        resetAll
    }*/

    return (
        <div>
            <button onClick={increaseGood} type="button">increase good</button>
        </div>
    )

}

export default GoodButton