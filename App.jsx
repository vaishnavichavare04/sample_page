import { ComponentA } from "./Components/ComponentA"
import ComponentB from "./Components/ComponentB"
import ComponentC from "./Components/ComponentC"
import Navbar from "./Components/Navbar"

function App () {
  return(
<div>
  <ComponentA />
  <Navbar />
  <ComponentB />
  <ComponentC />
</div>
  )
}

export default App