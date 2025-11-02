import Cadre from "./Components/Cadre"
import bg from "./assets/5153829.jpg"

function App() {

  return (
    <>
      <div>
        <div className="w-full h-screen bg-cover bg-center flex items-center justify-center" style={{backgroundImage : `url(${bg})`}}>
          <Cadre />
        </div>
      </div>
    </>
  )
}

export default App
