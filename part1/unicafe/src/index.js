import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css';


const Header = ({text}) => ( 
  <h2> {text} </h2> 
)

const Clicks = ({text, count}) => ( 
  <li>{text} : <b>{count}</b></li> 
)

const Statistics = ({good, neutral, bad}) => {

  let total = good + neutral + bad
  let positive = good ? (good / total) * 100 : 0
  let average = good ? (good - bad) / total : 0

  return (
    <>
      <li>all: {total}</li>
      <li>average: {average}</li>
      <li>positive: {positive} %</li>
    </>
  )

}

const StatisticsComponent = (props) => {

  let {good, neutral, bad} = props.args

  if(good || neutral || bad) {
    return(  
    <ul>
      <Clicks text={"good"} count={good} />
      <Clicks text={"neutral"} count={neutral} />
      <Clicks text={"bad"} count={bad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </ul>
    )
  
  }
  
  return <p> No feedback given </p>
  
}


const Button = ({handleClick, text}) => ( 
  <button onClick={handleClick}> {text} </button> 
)


const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    
    <div id="main">
      
      <Header text={"give feedback"} />
      
      <div>
        <Button handleClick={increaseGood} text={"Good"} />
        <Button handleClick={increaseNeutral} text={"Neutral"} />
        <Button handleClick={increaseBad} text={"Bad"} />
      </div>

      <Header text={"statistics"} />

      <div>
        <StatisticsComponent args={{good, neutral, bad}} />
      </div>

    </div>
  )
}


ReactDOM.render(<App />,
  document.getElementById('root')
);

