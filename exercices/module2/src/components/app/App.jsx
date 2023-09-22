import { useState } from 'react'
import Display from '../display/display'
import Button from '../button/Button'

const App = () => {
    console.log("tesr");
    const [ counter, setCounter ] = useState(JSON.parse(localStorage.getItem("counter")))
  
    const changeCounter = (delta) => {
        setCounter(counter + delta) 
        localStorage.setItem("counter", JSON.stringify(counter+delta))
    }
  
    return (
      <div>
        <Display counter={counter}/>
  
        <Button
          changeCounter={changeCounter}
          text='plus'
          delta={1}
        />
        <Button
          changeCounter={changeCounter}
          text='zero'
          delta={0 - counter}
        />     
        <Button
          changeCounter={changeCounter}
          text='minus'
          delta={-1}
        />           
      </div>
    )
  }

export default App