import { useState } from 'react'

const MostVotes = ({mVotes, anecdote}) => {
  return(
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdote}</p>
      <p>has {mVotes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [maxVotes, setMaxVotes] = useState(0);
  const [maxVotesIndex, setMaxVotesIndex] = useState(0);

  const randomNum = () => {
    const n = Math.floor(Math.random() * anecdotes.length);
    setSelected(n);
  };

  const upVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
    const max = Math.max(...newVotes);
    setMaxVotes(max);
    const max_idx = newVotes.indexOf(max);
    setMaxVotesIndex(max_idx);
  };
  return (
    <div>
      <h1>Anecdote Of The Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <button onClick={randomNum}>Generate Next</button>
      <button onClick={upVote}>up vote</button>
      <MostVotes mVotes={maxVotes} anecdote={anecdotes[maxVotesIndex]} />
    </div>
  );
}

export default App