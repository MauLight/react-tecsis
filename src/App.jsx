import { Carrousel } from './components/Carrousel'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { NavBar } from './components/NavBar'
import { Products } from './components/Products'


function App() {

  return (
    <div className="min-h-screen bg-[#ffffff] w-screen">
      <NavBar />
      <Hero />
      <Nav />
      <Carrousel />
      <Products />
      <Contact />
    </div>
  )
}

export default App
