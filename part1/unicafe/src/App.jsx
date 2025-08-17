import { useState } from 'react'

const Content = ({handleG, handleN, handleB}) => {
  return(
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button clk={handleG} text="Good"/>
        <Button clk={handleN} text="Neutral"/>
        <Button clk={handleB} text="Bad"/>
      </div>
    </div>
  )
}

const Button = ({clk, text}) => {
  return(
    <button onClick={clk}>{text}</button>
  )
}

const StatisticLine = ({text, content}) => {
  return(
    <p>{text}: {content}</p>
  )
}

const Stats = ({gd, ntrl, bd, tot}) => {
  const positiveReviews = (gd/tot)*100 +"%";
  if(gd>0 || ntrl>0 || bd>0){
      return(
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <tr><td><StatisticLine text="Good" content={gd}/></td></tr>
            <tr><td><StatisticLine text="Neutral" content={ntrl}/></td></tr>
            <tr><td><StatisticLine text="Bad" content={bd}/></td></tr>
            <tr><td><StatisticLine text="Total" content={tot}/></td></tr>
            <tr><td><StatisticLine text="Average" content={tot/3}/></td></tr>
            <tr><td><StatisticLine text="Positive reviews" content={positiveReviews}/></td></tr>
          </tbody>
        </table>
      </div>
    )
  } else {
    return(
      <div>
        <h1>Statistics</h1>
        <p>No Feedback Given!</p>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setGood(good+1);
    setAll(all+1);
  }

  const handleNeutral = () => {
    setNeutral(neutral+1);
    setAll(all+1);
  }

  const handleBad = () => {
    setBad(bad+1);
    setAll(all+1);
  }

  return (
    <div>
      <Content handleG={handleGood} handleN={handleNeutral} handleB={handleBad}/>
      <Stats gd={good} ntrl={neutral} bd={bad} tot={all}/>
    </div>
  )
}

export default App