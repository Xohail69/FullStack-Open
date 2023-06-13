const Header = ({course}) => {
    // console.log(course)
      return (
        <div>
      <h2>{course.name}</h2>
      </div>
      )
}

const Content = ({all}) => {
  // console.log(all)
  return(
    <>
       {
      all.map(x => 
      <p>
        {x.name}  {x.exercises}
      </p> )
      }
      
     <b>Total of  {

all.reduce( (total, curr )=> {
 return total + curr.exercises} , 0  )

} Excercises</b>
    </>
  )
}

const Course = ({course}) => {
  // console.log(course)
  return (
    <div>
        <Header course={course} />
        <Content all={course.parts} />
  
    </div>
  )
}
export default Course