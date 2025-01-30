import { Fragment } from "react"
import { Home } from "./pages/Home.jsx"
import OurHistory from "./pages/OurHistory.jsx"
import Dress from "./pages/Dress.jsx"
import Gifts from "./pages/Gifts.jsx"
import Gallery from "./pages/Gallerry.jsx"

function App() {
  return (
    <Fragment className="flex flex-col min-h-screen">
      <Gallery />
    </Fragment>
  )
}

export default App
