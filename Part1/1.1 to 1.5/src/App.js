console.clear() ;

const Header = (prop) => {
    // console.log(prop)
      return (
        <div>
      <h1>{prop.course.name}</h1>
      </div>
      )
}
const Part = (prop) => {
  return(
  <p>
        {prop.part} {prop.exercise}
  </p>
  )
}
const Content = (prop) => {
  
  return(
    <>
      <Part part={prop.all[0].name} exercise={prop.all[0].exercises}  />
      <Part part={prop.all[1].name} exercise={prop.all[1].exercises}  />
      <Part part={prop.all[2].name} exercise={prop.all[2].exercises}  />



    </>
  )
}
const Total = (prop) => {
  return(
    <p>Number of exercises {prop.all[0].exercises + prop.all[1].exercises + prop.all[2].exercises}</p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development' ,
    parts : [ {
    name: 'Fundamentals of React',
    exercises: 10
  }
  , {
    name: 'Using props to pass data',
    exercises: 7
  }
  , {
    name: 'State of a component',
    exercises: 14
  }
]
  }
  return (
    <div>
        <Header course={course} />
        <Content all={course.parts} />
        <Total all={course.parts} />
  
    </div>
  )
}

export default App