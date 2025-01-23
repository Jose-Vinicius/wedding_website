import { Fragment } from "react"
import { Home } from "./pages/Home.jsx"
import OurHistory from "./pages/OurHistory.jsx"

function App() {

  return (
    <Fragment className="flex flex-col min-h-screen">
      <OurHistory />
    </Fragment>
  )
}

export default App
