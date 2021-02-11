import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.no_exercises}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0].name} no_exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} no_exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} no_exercises={props.parts[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total_exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total total_exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))