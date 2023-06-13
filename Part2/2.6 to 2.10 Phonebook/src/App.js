import {useState} from 'react'


const Filter = ({query,fun,FPerson})=>{

 
  return(
    <div>
    Filter shown with <input
  value={query}
  onChange={fun}
    />

<ul>{ 

    FPerson.map(person => <li>{person.name} {person.number}</li> 
    )
  }
</ul>

</div>
  )


}

const PersonForm = ({addName,newName , handleNameChange, newNum, handleNumChange})=>{

  return(

    <>
     <form onSubmit={addName}>
        <div>
          Name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          Number: <input 
            value={newNum}
            onChange={handleNumChange}
           />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    
    
    </>
  )

}

const Persons = ({persons})=>{
  return(
    <>
    <ul>{
          persons.map(person => <li key={person.id}>{person.name} {person.number}</li> 
          )
        }
      </ul>

    </>
  )
}

const App = ()=>{
  
  const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '7836-37833', id: 1 } ,
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const[newName, setNewName] = useState('')
  const[newNum , setNewNum] = useState('')
  const[FilPerson, setFilPerson] = useState([])

  const[newQuery, setNewQuery] = useState('')



  let filteredPersons = []
  
  
  const addName = (event)=>{
    event.preventDefault() ;
    const result = persons.find(({ name }) => name === newName);
    if (result === undefined ){
      const naam = {
        name: newName ,
        number: newNum
      }
      setPersons(persons.concat(naam))

      setNewName('')
      setNewNum('')
    }
    else{
      alert(`${newName} is already added to phonebook`)
    }
    
  }

  const handleNameChange = (event)=>{
    setNewName(event.target.value)
  }

  const handleNumChange = (event)=>{
    setNewNum(event.target.value)
  }           
  const handleFilter = (event)=>{
    setNewQuery(event.target.value)
    var search = event.target.value ; 
     filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));
     setFilPerson(filteredPersons )
  }

  return(
    <div>
      <h1>Phonebook</h1>

       <Filter query={newQuery} fun={handleFilter} FPerson={FilPerson} /> 

      <h2>Add a new </h2>


      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNum={newNum} handleNumChange={handleNumChange}/>

     
      <h2>Numbers</h2>

      <Persons persons={persons} />







      

    </div>
  )
}
export default App