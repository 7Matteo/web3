import { useState } from 'react'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number : '23432-43214'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const searchFilter = (e) => {
    if(e.target.value !== ''){
      setPersons(persons.filter(p => p.name === filter))
    }
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const isDoublons = (person) => {
    if(persons.some(p => p.name == person.name)){
      
      alert('doublon !!!')
      return true;
    }
    return false;
  }

  const addPerson = (e) => {
    e.preventDefault()
    var person = {name : newName, number : newNumber}
    if(!isDoublons(person)){
      setPersons(persons.concat(person))
    }
    setNewNumber('')
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter: <input 
          value={filter}
          onChange={searchFilter}/>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNewName}/>
        </div>
        <div>
          number: <input 
          value={newNumber}
          onChange={handleNewNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
        {persons.map(person =>
          <ul>{person.name} {person.number}</ul>)}
      
      
    </div>
  )
}

export default App
