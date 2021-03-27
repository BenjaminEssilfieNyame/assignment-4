import {BrowserRouter, Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import InventoryPage from "./pages/InventoryPage"
import "./components/CarRentals.css"

const App = () => {
  return (
    <div className="Car-rentals">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/inventory" component={InventoryPage} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>         
  )       
}  
 
export default App;
