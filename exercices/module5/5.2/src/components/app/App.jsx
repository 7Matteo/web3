import { useState } from 'react'
import './App.css'
import BadButton from '../buttons/BadButton'
import GoodButton from '../buttons/GoodButton'
import OkButton from '../buttons/OkButton'
import ResetButton from '../buttons/ResetButton'
import { useContext } from 'react'
import { Context } from '../../contexts/counterContext'

function App() {
  const [count, setCount] = useState(0)
  const {ok, bad, good} = useContext(Context)

  return (
    <>
      <li>
        Good : {good} <GoodButton/>
      </li>
      <li>
        Ok : {ok} <OkButton/>
      </li>
      <li>
        Bad : {bad} <BadButton/>
      </li>
      <li>
        <ResetButton/>
      </li>
    </>
  )
}

export default App
