import './App.css'
import Accordion from './components/accordion'
import RandomColour from './components/random-colour'
import StarRating from './components/star-rating'


function App() {

  return (
    <div>
      {/* Accordion Component */}
      <Accordion />

      {/* Random Colour Component */}
      <RandomColour />

      {/* Star Rating Component*/}
      <StarRating noOfStars={10}/>
    </div>
  )
}

export default App
