import { useContext } from "react"
import { Context } from "../../contexts/counterContext"


const ResetButton = () => {
    const {resetAll} = useContext(Context)
/*
    const changeValue = () => {
        resetAll
    }*/

    return (
        <div>
            <button onClick={resetAll} type="button">reset</button>
        </div>
    )

}

export default ResetButton