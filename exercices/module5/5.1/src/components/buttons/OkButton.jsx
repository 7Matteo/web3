import { useContext } from "react"
import { Context } from "../../contexts/counterContext"


const OkButton = () => {
    const {increaseOk} = useContext(Context)

    

    return (
        <div>
            <button onClick={increaseOk} type="button">increase ok</button>
        </div>
    )

}

export default OkButton