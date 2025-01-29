import { Fragment } from "react"
import { Home } from "./pages/Home.jsx"
import OurHistory from "./pages/OurHistory.jsx"
import Dress from "./pages/Dress.jsx"
import Gifts from "./pages/Gifts.jsx"

function App() {
  return (
    <Fragment className="flex flex-col min-h-screen">
      <Gifts />
    </Fragment>
  )
}

export default App
