import { useState } from 'react'
import { allQuestions } from '../../questions'

import './game.scss'

export const Game = ({ setDoneGame, setCorrectApp, correct }) => {
  const [step, setStep] = useState(0)
  const question = allQuestions[step]

  const currentQuestion = i => {
    setStep(step + 1)
    setDoneGame(step)
    if (i === allQuestions[step].isTrue) {
      setCorrectApp(correct + 1)
    }
  }

  const percentageOfProgress = (step / allQuestions.length) * 100

  return (
    <div className='gameWrapper'>
      <div
        className='progressBar'
        style={{ width: ${percentageOfProgress}% }}
      ></div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((q, i) => (
          <li key={q} onClick={() => currentQuestion(i)}>
            {q}
          </li>
        ))}
      </ul>
    </div>
  )
}