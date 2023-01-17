import { useState } from 'react'
import { SelectInput } from './components'
import { color } from './helpers/color'



const App = () => {
  const [changeColor, setChangeColor] = useState(null)
  let colorBase = 'white'
  if(changeColor) localStorage.setItem('color', color(changeColor))
  if(localStorage.color) colorBase = localStorage.color

  return (
    <div className="App" style={{backgroundColor: colorBase}}>
      <SelectInput color={setChangeColor}/>
    </div>
  )
}

export default App
