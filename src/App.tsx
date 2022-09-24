import { useState } from 'react'
import ThreeBox from './components/ThreeBox';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ThreeBox />
    </div>
  )
}

export default App
