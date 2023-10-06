import { useState } from 'react'
import Statistics from '../statistics/Statistics'

const Loading = () => {
  const [loading, setLoading] = useState(true)
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const setGoodValue = (value) => () => {
      setGood(value);
      setTotalValue(1+total)
  }

  const setNeutralValue = (value) => () => {
      setNeutral(value);
      setTotalValue(1+total)
  }

  const setBadValue = (value) => () => {
      setBad(value);
      setTotalValue(1+total)
  }

  const setTotalValue = (value) => {
    setTotal(value);
  }

  
  setTimeout(() => {
    console.log("HAREGZECFAZEFX");
    return (
      <div>
        <Loading/>
      </div>
    )
  }, 5000);


  return (
    <div>
        <h1>Give feedback</h1>
        <div>
            <button onClick={setGoodValue(good + 1)}>good</button>
            <button onClick={setNeutralValue(neutral + 1)}>neutral</button>
            <button onClick={setBadValue(bad + 1)}>bad</button>
        </div>
        <h1>statistics</h1>
        <div>
            <Statistics
              good = {good}
              neutral = {neutral}
              bad = {bad}
              total = {total}
            />
        </div>
    </div>
    
  )
}

export default App