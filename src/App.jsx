import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import User from './User'


function App() {

  function handleClick() {
    alert('Button Clicked')
  }
  const handleClick2 = () =>{
    alert('Button 2 click')
  }
  const addToFive = (num) =>{
    alert(num + 5);
  }
  return (
    <>
      
      <h3>Vite + React</h3>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
     <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClick2}>Click 2</button>
     <button onClick={() => {alert('Third button click')}}>Third</button>

     <button onClick={() => addToFive(3)}>Four Click</button>
      
    </>
  )
}

export default App
