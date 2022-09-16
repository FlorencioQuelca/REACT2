
import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
 
  const [isTrue, setIsTrue] = useState(!true)
  const handleBool=()=>{
    setIsTrue(!isTrue)
  }
  return (
    <div className="App">
      <button onClick={handleBool}> show/hide</button>
      {
        isTrue ?
        <Counter/>
        :
        <div>
          <img src="https://i.blogs.es/51ade4/ella-don-0oqmvhc1ntw-unsplash/1024_2000.jpg" alt="aras" />
        </div>

      }
 
   </div>
  )
}

export default App
