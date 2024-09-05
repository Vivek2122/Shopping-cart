import CartItems from "./Components/CartItems"
import Navbar from "./Components/NavBar"
import Navigation from "./Components/Navigation"
import { cartContext } from "./Context/CartContextProvider"

function App() {

  return (
    <>
      <Navbar />
      <Navigation />
      <CartItems/>
    </>
  )
}

export default App
