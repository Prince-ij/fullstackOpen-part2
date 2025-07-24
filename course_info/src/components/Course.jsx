const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}


const Part = ({ part }) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </>
  )
}

const Total = ({ parts }) => {

  return (
    <>
      <p>total of exercises {parts.reduce((a, c) => a + c.exercises, 0)}</p>
    </>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default Course
