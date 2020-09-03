import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticsLine = ( {text, value} ) => {
  return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}
const Statistics = ({ good, neutral, bad, all, avg, positive }) => {

  if (all === 0)
    return (
      <h3>No feedback given</h3>
    )
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
            Statistics
            </th>
          </tr>
        </thead>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="avg" value={avg} />
          <StatisticsLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const avg = (1*good + 0*neutral + (-1)*bad)/all
  const positive = (good/all)*100 +'%'
  
  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        all={all}
        avg={avg}
        positive={positive}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)