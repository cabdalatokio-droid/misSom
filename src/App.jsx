import Competitors from "./components/competitors/competitors"
import Header from "./components/header1/Header"
import VoteModal from "./components/modal/VoteModal"
import Timer from "./components/timer/Timer"
 


function App() {

  return (
    <div className="App">
  <Header/>
  <Timer/>
  <Competitors/>
  <VoteModal/>
      
    </div>
  )
}

export default App
