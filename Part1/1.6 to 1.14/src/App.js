import { useState } from 'react'

const Heading = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({fun , text}) => {
  return (
    <button onClick={fun} >{text}</button>
  )
}

const Data = ({text,num, per}) => {
  return(
   
    <div> {text}  {num}  {per} </div>
  )
}


// Table Stats
const Statistics = ({good , neutral , bad })=> {
  return (
    <>
    <table>
      <tbody>
      <tr>
        <th>good</th>
        <th> {good} </th>
      </tr>
      <tr>
        <th>neutral</th>
        <th> {neutral} </th>
      </tr>
      <tr>
        <th>bad</th>
        <th> {bad} </th>
      </tr>
      <tr>
        <th>all</th>
        <th> {good+bad+neutral} </th>
      </tr>
      <tr>
        <th>average</th>
        <th>{ (good-bad)/(good + bad + neutral)  }</th>
      </tr>
      <tr>
        <th>positive</th>
        <th>{ 100*good/(good+neutral+bad) }</th>
      </tr>
      </tbody>
    </table>
    </>
  )
}


// Stats without Table
// const Statistics = ({good , neutral , bad})=> {
//   return (
//     <>
//   <Data text='good' num={good} />
//   <Data text='neutral' num={neutral} />
//   <Data text='bad' num={bad} />
//   <Data text='all' num={good+bad+neutral} />
//   <Data text='average' num={ (good-bad)/(good + bad + neutral)  } />
//   <Data text='positive' num={100*good/(good+neutral+bad)} per='%' />
//     </>

//   )
  
// }



// const App = () => {
  
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   let f ; 
//   if((good + bad + neutral) === 0  )
//    f = 1 
//    else f = 0 ; 
//   return (
//       <div>

//     <Heading text='give feedback'/>
//     <Button fun={()=>{ setGood(good+1) }} text='good'/>
//     <Button fun={()=>{ setNeutral(neutral+1) }} text='neutral'/>
//     <Button fun={()=>{ setBad(bad+1) }} text='bad'/>
//     <Heading text='statistics'/> 

//         { f ? ( <div>  No feedback given  </div>  ) :  
//           (    <Statistics good={good} neutral={neutral} bad={bad}/>  )

//         }
//       </div>


//   )


// }


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [ixvote, setVote] = useState([0,0,0,0,0,0,0,0])

  function genRan(min = 0, max = 8) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}
  
const handleVote = ()=>{
  const copy = [...ixvote]
      copy[selected] += 1   
      setVote( copy)
}
const most = ()=>{
  let i = ixvote.indexOf(Math.max(...ixvote));
  return i 
}

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div> 
          <div>
           has {ixvote[selected]} votes
           </div>

         { console.log(selected)}
          <button onClick={handleVote } > Vote </button>
    
         { console.log(ixvote)}


         <button onClick={()=>{setSelected(genRan() )} } > Next Anecdote </button>

        </div>

        <h1>Anecdote with most votes</h1>
        {anecdotes[most()]}
        <div>
           has {ixvote[most()]} votes
           </div>


    </div>
  )
}




export default App