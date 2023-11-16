import React from 'react'

export default function Modal({ isCorrect , turn, solution }) {
    return (
        <div className="modal">
            {isCorrect && (
                <div>
                    <h1>Congratulations!</h1>
                    <p className="solution">Ans: {solution}</p>
                    <p>Would you like to try again?</p>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>You lose!</h1>
                    <p className="solution">Ans: {solution}</p>
                    <p>Better luck next time!</p>
                </div>
            )}
        </div>
    )
}