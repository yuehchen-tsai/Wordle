import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>

      <h1>Wordle</h1>
      <div className="rules">
        <p>
          <Link to="/rule">Rule</Link>
        </p>
      </div>
      <h3>Select difficulties:</h3>
      <div className="difficulties">
        <p>
          <Link to="/normal">Normal</Link>
        </p>
        <p>
          <Link to="/hard">Hard</Link>
        </p>
      </div>
    </>
  )
}

export default App
