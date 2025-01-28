import { Fragment } from "react"
import { Home } from "./pages/Home.jsx"
import OurHistory from "./pages/OurHistory.jsx"
import Dress from "./pages/Dress.jsx"

function App() {
  return (
    <Fragment className="flex flex-col min-h-screen">
      <Dress />
    </Fragment>
  )
}

export default App
