import { Accordeon } from "./components/Accordeon"
import { Counter } from "./components/Counter"

function App() {

  return (
    <div>
      <Accordeon title="Mas informacion">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ducimus.</p>
      </Accordeon>
      <Counter limit={10}/>
    </div>
  )
}

export default App
