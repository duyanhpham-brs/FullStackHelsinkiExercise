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
<<<<<<< HEAD
      <Part part={props.parts[0].name} no_exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} no_exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} no_exercises={props.parts[2].exercises}/>
=======
      <Part part={props.part1} no_exercises={props.exercises1}/>
      <Part part={props.part2} no_exercises={props.exercises2}/>
      <Part part={props.part3} no_exercises={props.exercises3}/>
>>>>>>> parent of 5cb54f5... submit part1 courseinfo step 3 (exercise 1.3)
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
<<<<<<< HEAD
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
=======
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
>>>>>>> parent of 5cb54f5... submit part1 courseinfo step 3 (exercise 1.3)

  return (
    <div>
      <Header course={course}/>
<<<<<<< HEAD
      <Content parts={parts}/>
      <Total total_exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
=======
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total total_exercises={exercises1 + exercises2 + exercises3}/>
>>>>>>> parent of 5cb54f5... submit part1 courseinfo step 3 (exercise 1.3)
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))