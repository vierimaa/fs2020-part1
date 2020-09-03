import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({0:0,1:0,2:0,3:0,4:0,5:0})
  const aneLen = anecdotes.length

  const voteHandeler = () => {
    const copy = {...points}
    copy[selected] +=1
    setPoints(copy)
  }
  
  const maxVotes = Object.keys(points).reduce((a, b) => points[a] > points[b] ? a : b);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      -----anecdote number {selected}
      <div>
        This anecdote has {points[selected]} points
      </div>
      <div>
        <Button text="vote" onClick={voteHandeler} />
        <Button text="next anecdote" onClick={() => setSelected(Math.floor(Math.random() * Math.floor(aneLen)))} />
      </div>
      <h1>Anecdote with most votes</h1>
      {anecdotes[maxVotes]}
      <div>
        Has {points[maxVotes]} votes
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)